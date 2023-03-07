<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSetting extends Model
{
    use HasFactory;

    const DEFAULT_SETTINGS_ARRAY = [
        'favorite_categories' => [],
        'favorite_sources' => [],
        'favorite_authors' => [],
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'key',
        'settings',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'settings' => 'array',
    ];

    /**
     * Get the user that owns the setting.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the user's settings.
     */
    public static function settings($user_id)
    {
        return UserSetting::where('user_id', $user_id)->get();
    }

    /**
     * Fetch default settings.
     */
    public static function defaultSettings($encoded = true)
    {
        if ($encoded) {
            return json_encode(self::DEFAULT_SETTINGS_ARRAY);
        }
        return self::DEFAULT_SETTINGS_ARRAY;
    }

    /**
     * Fetch default settings as an object
     */
    public static function formattedSettings($user)
    {
        return json_decode($user->attributes['settings']);
    }
}
