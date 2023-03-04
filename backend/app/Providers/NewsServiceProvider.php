<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class NewsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(NewsApiStrategy::class, function ($app) {
            $api = config('services.news.api');
            $baseUrl = config("services.news.$api.base_url");
            $apiKey = config("services.news.$api.api_key");
            $paramKey = config("services.news.$api.param_key");

            $className = "App\\Services\\NewsApi\\$api\\$api" . "NewsApiService";

            return new $className($baseUrl, $apiKey, $paramKey);
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
