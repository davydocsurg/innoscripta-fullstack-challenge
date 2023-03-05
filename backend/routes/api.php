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
Route::prefix('articles')->group(function () {
    // search for articles
    Route::get('/search', [App\Http\Controllers\ArticleController::class, 'search']);
});
