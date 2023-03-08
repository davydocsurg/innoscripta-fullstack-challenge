<?php

namespace App\Http\APIs\NewsAPI;

class NewsAPIService extends BaseNewsAPI
{
    public function __construct()
    {
        parent::__construct(config('services.newsapi.key'));
    }

    public function searchArticles($keyword, $beginDate, $filters = [])
    {
        $queries = [
            'keyword' => $keyword,
            'articlesSortBy' => $beginDate,
        ];

        return $this->buildCustomRequestUrl($queries)->sendRequest();
    }
}
