<?php

namespace App\Http\APIs\NYTimesAPI;

class NYTimesAPIService extends BaseNYTimesAPI
{
    public function __construct()
    {
        parent::__construct(config('services.nytimes.key'));
    }

    public function searchArticles($query, $filters = [])
    {
        $queries = [
            'q' => $query,
            'fq' => $filters,
        ];

        return $this->buildRequestUrl($queries)->sendRequest();
    }

}
