<?php

namespace App\Http\APIs\NewsAPI;

class NewsAPIService extends BaseNewsAPI
{
    public function __construct()
    {
        parent::__construct(config('services.newsapi.key'));
    }

    public function searchArticles($keyword, $filters = [])
    {
        $queries = [
            'q' => $keyword,
            'language' => 'en',

        ];

        return $this->buildCustomRequestUrl($queries)->sendRequest();
    }
}
