<?php

namespace App\Http\APIs\GuardianAPI;

use Illuminate\Support\Arr;

class GuardianAPIService extends BaseGuardianAPI
{
    public function __construct()
    {
        parent::__construct(config('services.guardian.api_key'));
    }

    public function saveArticle($article)
    {
        $article = Arr::dot($article);

        return;
    }
}
