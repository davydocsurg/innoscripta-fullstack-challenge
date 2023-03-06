<?php

namespace App\Http\APIs\GuardianAPI;

class GuardianAPIService extends BaseGuardianAPI
{
    public function __construct()
    {
        parent::__construct(config('services.guardian.key'));
    }

    public function searchArticles($query, $filters = [])
    {
        $queries = [
            'q' => $query,
        ];

        return $this->buildRequestUrl($queries)->sendRequest();
    }
}
