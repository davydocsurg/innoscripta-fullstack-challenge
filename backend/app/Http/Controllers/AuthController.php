<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserSetting;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        try {
            DB::beginTransaction();
            $validate = $this->validator($request);
            if ($validate->fails()) {
                return response([
                    'status' => false,
                    'errors' => $validate->errors()->messages(),
                ], 400);
            }

            $user = new User();
            $this->store($request, $user);

            $userSetting = new UserSetting();
            $this->createDefaultUserSetting($user, $userSetting);

            DB::commit();

            return response([
                'status' => true,
                'message' => 'Registeration was successfully',
            ], 201);
        } catch (\Throwable$th) {
            DB::rollBack();
            return response([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    /**
     * User data validator
     * @param Request $request
     * @param array $customRules
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(Request $request)
    {
        // custom messages
        $messages = [
            'first_name.required' => 'First name is required',
            'last_name.required' => 'Last name is required',
            'email.required' => 'Email is required',
            'email.unique' => 'Email already exists',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Password confirmation does not match',
            'password.regex' => 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
        ];

        return Validator::make($request->all(), [
            'first_name' => 'required|string|min:3|max:255',
            'last_name' => 'required|string|min:3|max:255',
            'email' => 'required|unique:users|email:filter,rfc,dns|string|max:255',
            "password" => "required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,255}$/|min:8|max:255|confirmed",
        ], $messages);
    }

    /**
     * Store newly created resource
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($request, $user)
    {
        $user->first_name = ucfirst($request->first_name);
        $user->last_name = ucfirst($request->last_name);
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $user->save();
    }

    /**
     * Create default user settings
     * @param $userSetting $user
     */
    public function createDefaultUserSetting($userSetting, $user)
    {
        $userSetting->user_id = $user->id;
        // generate a unique key for the user
        $userSetting->key = Str::slug($user->first_name . ' ' . $user->last_name . ' ' . Carbon::now()->timestamp, '-') . '-' . Str::random(10);
        $userSetting->settings = UserSetting::defaultSettings();
        $userSetting->save();
    }

    /**
     * Login a user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $loginValidator = Validator::make($request->all(), [
            'email' => 'required|email:filter',
            'password' => 'required',
        ]);
        if ($loginValidator->fails()) {
            return response([
                'status' => false,
                'errors' => $loginValidator->errors()->messages(),
            ], 400);
        }

        $invalidCredentialsResponse = [
            'status' => false,
            'message' => 'Invalid Credentials. Check and try again',
        ];

        $email = $request->email;
        $password = $request->password;

        $user = User::where('email', $email)->first();
        if (!$user) {
            return response($invalidCredentialsResponse, 401);
        }

        if (!Hash::check($password, $user->password)) {
            return response($invalidCredentialsResponse, 401);
        }

        $token = $user->createToken('auth_token');

        $data = [
            'status' => true,
            'message' => 'Login was successfully',
            'token' => $token->accessToken,
            'token_type' => 'Bearer',
            'token_expires' => Carbon::parse(
                $token->token->expires_at
            )->toDateTimeString(),
            'user' => $user,
        ];

        return response($data, 200);
    }
}
