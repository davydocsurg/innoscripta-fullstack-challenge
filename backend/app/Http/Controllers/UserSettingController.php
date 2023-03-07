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
        $formatUserSettings = UserSetting::getFormattedSettings($userSetting->settings);

        return response([
            'status' => true,
            'message' => 'User settings fetched successfully',
            'user_settings' => $formatUserSettings,
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

        // update user settings but don't override the other settings
        $userSetting = UserSetting::where('user_id', $userId)->first();
        $settings = [
            'favorite_sources' => $request->favorite_sources ?? $userSetting->settings['favorite_sources'],
            'favorite_categories' => $request->favorite_categories ?? $userSetting->settings['favorite_categories'],
            'favorite_authors' => $request->favorite_authors ?? $userSetting->settings['favorite_authors'],
        ];
        if (!$userSetting) {
            return response([
                'status' => false,
                'message' => 'User settings not found',
            ], 404);
        }

        $userSetting->settings = array_merge($userSetting->settings, $settings);
        $userSetting->save();

        return response([
            'status' => true,
            'message' => 'User settings updated successfully',
            'user_settings' => $userSetting,
        ], 200);
    }
}
