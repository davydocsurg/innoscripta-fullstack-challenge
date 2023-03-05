<?php

namespace App\Http\APIs\NYTimesAPI;

class NYTimesAPIService extends BaseNYTimesAPI
{
    public function __construct()
    {
        parent::__construct(config('services.nytimes.key'));
    }

    public function searchArticles($query, $page, $filters = [])
    {
        $queries = [
            'q' => $query,
            'sort' => 'newest',
            'page' => $page,
            'fq' => $filters,
        ];

        return $this->buildRequestUrl($queries)->sendRequest();
    }

}
