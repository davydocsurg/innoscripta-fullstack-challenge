<?php

namespace App\Http\APIs\NewsDataAPI;

class NewsDataAPIService extends BaseNewsDataAPI
{
    public function __construct()
    {
        parent::__construct(config('services.newsdata.key'));
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
