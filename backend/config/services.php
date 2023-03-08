<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
     */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'nytimes' => [
        'base_url' => 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        'key' => env('NYTIMES_API_KEY', 'xa5JougnXXJ33LbzAvath5EFakICBw0x'),
        'app_id' => env('NYTIMES_APP_ID', 'f08d8cd3-ed19-41b6-9f3f-e91aeb0643e4'),
        'app_secret' => env('NYTIMES_APP_SECRET', 'j8SiH5WwApNpT66b'),
    ],

    'guardian' => [
        'base_url' => 'https://content.guardianapis.com/search',
        'key' => env('GUARDIAN_API_KEY', '391ca6af-35ce-4edc-b24a-13ef92e01348'),
    ],

    'newsapi' => [
        'base_url' => 'https://newsdata.io/api/1/news',
        'key' => env('NEWSDATA_API_KEY', 'pub_183493c19552e7486e8c5d92b8533b5886e26'),
    ],

];
