<?php

namespace App\Http\Controllers;

use App\Models\UserSetting;
use Illuminate\Http\Request;

class UserSettingController extends Controller
{

    /**
     * Get user settings
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserSettings()
    {
        $userId = auth()->user()->id;

        $userSetting = UserSetting::where('user_id', $userId)->first();

        return response([
            'status' => true,
            'message' => 'User settings fetched successfully',
            'user_settings' => $userSetting,
        ], 200);
    }

    /**
     * Update user settings
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateUserSettings(Request $request)
    {
        $userId = auth()->user()->id;

        $settings = [
            'favorite_sources' => $request->favorite_sources ?? [],
            'favorite_categories' => $request->favorite_categories ?? [],
            'favorite_authors' => $request->favorite_authors ?? [],
        ];

        $userSetting = UserSetting::where('user_id', $userId)->first();
        $userSetting->update([
            'settings' => $settings,
        ]);

        return response([
            'status' => true,
            'message' => 'User settings updated successfully',
            'user_settings' => $userSetting,
        ], 200);
    }
}
