<?php

namespace App\Http\APIs\NewsDataAPI;

class NewsDataAPIService extends BaseNewsDataAPI
{
    public function __construct()
    {
        parent::__construct(config('services.newsdata.key'));
    }

    public function searchArticles($query, $beginDate = null, $endDate = null, $filters = [])
    {
        $queries = [
            'q' => $query,
            'language' => 'en',
            'begin_date' => $beginDate ?? null,
            'end_date' => $endDate ?? null,
        ];

        return $this->buildCustomRequestUrl($queries)->sendRequest();
    }
}
