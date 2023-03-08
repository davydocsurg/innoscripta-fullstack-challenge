<?php

namespace App\Http\APIs\NewsAPI;

use App\Http\APIs\BaseAPI;

abstract class BaseNewsAPI extends BaseAPI
{
    public function __construct()
    {
        $this->key = config('services.newsapi.key');
        $this->requestParamKey = 'apikey';
        $this->baseUrl = config('services.newsapi.base_url');
    }
}
