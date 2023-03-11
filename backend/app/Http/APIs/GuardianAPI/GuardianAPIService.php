<?php

namespace App\Http\APIs\GuardianAPI;

class GuardianAPIService extends BaseGuardianAPI
{
    public function __construct()
    {
        parent::__construct(config('services.guardian.key'));
    }

    public function searchArticles($keyword, $fromDate = null, $tag = null, $filters = [])
    {
        $queries = [
            'q' => $keyword,
            'from-date' => $fromDate ?? null,
            // 'tag' => $tag ?? null,
        ];

        return $this->buildRequestUrl($queries)->sendRequest();
    }
}
