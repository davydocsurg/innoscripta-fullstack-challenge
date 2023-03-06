<?php

namespace App\Http\APIs\GuardianAPI;

use App\Http\APIs\BaseAPI;

abstract class BaseGuardianAPI extends BaseAPI
{
    public function __construct($key)
    {
        $this->key = config('services.guardian.key');
        $this->requestParamKey = 'api-key';
        $this->baseUrl = config('services.guardian.base_url');
    }
}
