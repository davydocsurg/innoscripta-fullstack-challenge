<?php

namespace App\Http\APIs\NYTimesAPI;

use Illuminate\Support\Arr;

class NYTimesAPIService extends BaseNYTimesAPI
{
    public function __construct()
    {
        parent::__construct(config('services.nytimes.api_key'));
    }

    public function saveArticle($article)
    {
        $article = Arr::dot($article);

        return;
    }
}
