<?php

namespace App\Http\APIs\NewsAPI;

class NewsAPIService extends BaseNewsAPI
{
    public function __construct()
    {
        parent::__construct(config('services.newsapi.key'));
    }

    public function searchArticles($keyword, $fromDate = null, $sortBy = null)
    {
        $queries = [
            'q' => $keyword,
            'sortBy' => $sortBy ?? null,
            'from' => $fromDate ?? null,
        ];

        return $this->buildCustomRequestUrl($queries)->sendRequest();
    }
}
