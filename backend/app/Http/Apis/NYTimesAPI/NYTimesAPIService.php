<?php

namespace App\Http\APIs\NYTimesAPI;

class NYTimesAPIService extends BaseNYTimesAPI
{
    public function __construct()
    {
        parent::__construct(config('services.nytimes.key'));
    }

    public function searchArticles($query, $beginDate = null, $endDate = null, $filters = [])
    {
        $queries = [
            'q' => $query,
            'fq' => $filters,
            'begin_date' => $beginDate ?? null,
            'end_date' => $endDate ?? null,
        ];

        return $this->buildRequestUrl($queries)->sendRequest();
    }

}
