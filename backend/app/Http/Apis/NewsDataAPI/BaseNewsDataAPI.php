<?php

namespace App\Http\APIs\NewsDataAPI;

use App\Http\APIs\BaseAPI;

abstract class BaseNewsDataAPI extends BaseAPI
{
    public function __construct()
    {
        $this->key = config('services.newsdata.key');
        $this->requestParamKey = 'apikey';
        $this->baseUrl = config('services.newsdata.base_url');
    }
}
