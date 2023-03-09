<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// register a new user
Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);

// login a user
Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);

// articles
Route::prefix('articles')->middleware('auth:api')->group(function () {
    // search for articles
    Route::post('/search', [App\Http\Controllers\ArticleController::class, 'search']);
    // update settings and preferences
    Route::patch('/settings', [App\Http\Controllers\UserSettingController::class, 'updateUserSettings']);
    // get settings and preferences
    Route::get('/settings', [App\Http\Controllers\UserSettingController::class, 'getUserSettings']);
});
