<?php

namespace App\Http\APIs\NYTimesAPI;

use App\Http\APIs\BaseAPI;

abstract class BaseNYTimesAPI extends BaseAPI
{
    public function __construct($key)
    {
        $this->key = config('services.nytimes.api_key');
        $this->requestParamKey = 'api-key';
        $this->baseUrl = config('services.nytimes.base_url');
    }
}
