<?php

namespace App\Http\APIs\NewsDataAPI;

class NewsDataAPIService extends BaseNewsDataAPI
{
    public function __construct()
    {
        parent::__construct(config('services.newsdata.key'));
    }

    public function searchArticles($query, $filters = [])
    {
        $queries = [
            'q' => $query,
            'language' => 'en',

        ];

        return $this->buildCustomRequestUrl($queries)->sendRequest();
    }
}
