<?php

namespace App\Http\APIs\NYTimesAPI;

class NYTimesAPIService extends BaseNYTimesAPI
{
    public function __construct()
    {
        parent::__construct(config('services.nytimes.api_key'));
    }

    public function searchArticles($query, $filters = [])
    {
        $queries = [
            'q' => $query,
            'sort' => 'newest',
            'page' => 0,
            'fq' => $filters,
        ];

        return $this->buildRequestUrl($queries)->sendRequest();
    }

}
