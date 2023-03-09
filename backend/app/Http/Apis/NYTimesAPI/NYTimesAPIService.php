<?php

namespace App\Http\APIs\NYTimesAPI;

use App\Helpers\ArrayHelper;
use App\Models\Article;
use Illuminate\Support\Arr;

class NYTimesAPIService extends BaseNYTimesAPI
{
    public function __construct()
    {
        parent::__construct(config('services.nytimes.key'));
    }

    public function searchArticles($keyword, $beginDate = null, $endDate = null, $filters = [])
    {
        $queries = [
            'q' => $keyword,
            'fq' => $filters,
            'begin_date' => $beginDate ?? null,
            'end_date' => $endDate ?? null,
        ];

        return $this->buildRequestUrl($queries)->sendRequest();
    }

    public static function getCorrectImageUrl($image)
    {
        if (empty($image)) {
            return null;
        }

        return 'https://www.nytimes.com/' . $image;
    }

    public static function saveArticle($article)
    {
        $article = Arr::dot($article);

        return Article::create([
            'title' => ArrayHelper::getArrayValue($article, 'headline.main'),
            'description' => ArrayHelper::getArrayValue($article, 'abstract'),
            'url' => ArrayHelper::getArrayValue($article, 'web_url'),
            'author' => ArrayHelper::getArrayValue($article, 'byline.original'),
            'published_at' => ArrayHelper::getArrayValue($article, 'pub_date'),
            'category' => ArrayHelper::getArrayValue($article, 'section_name'),
            'source' => 'nytimes',
            'image' => self::getCorrectImageUrl(
                ArrayHelper::getArrayValue($article, 'multimedia.0.url')
            )]);
    }

}
