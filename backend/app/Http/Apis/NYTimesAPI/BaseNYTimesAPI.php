<?php

namespace App\Http\APIs\NYTimesAPI;

use App\Http\APIs\BaseAPI;

abstract class BaseNYTimesAPI extends BaseAPI
{
    public function __construct($key)
    {
        $this->key = config('news.nytimes.api_key');
        $this->requestParamKey = 'api-key';
        $this->baseUrl = config('news.nytimes.base_url');
    }
}
