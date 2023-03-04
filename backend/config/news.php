<?php

return [
    'news' => [
        'nytimes' => [
            'base_url' => 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            'key' => env('NYTIMES_API_KEY', 'xa5JougnXXJ33LbzAvath5EFakICBw0x'),
            'app_id' => env('NYTIMES_APP_ID', 'f08d8cd3-ed19-41b6-9f3f-e91aeb0643e4'),
            'app_secret' => env('NYTIMES_APP_SECRET', 'j8SiH5WwApNpT66b'),
        ],
    ],
];
