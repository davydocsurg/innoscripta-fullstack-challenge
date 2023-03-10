<?php

namespace App\Http\Controllers;

use App\Http\APIs\GuardianAPI\GuardianAPIService;
use App\Http\APIs\NewsAPI\NewsAPIService;
use App\Http\APIs\NYTimesAPI\NYTimesAPIService;
use App\Http\Requests\ArticleSearchRequest;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class ArticleController extends Controller
{
    /**
     * Search for articles
     * @param ArticleSearchRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(ArticleSearchRequest $request)
    {
        $message = 'Articles fetched successfully';
        $source = $request->source;

        switch ($source) {
            case 'nytimes':
                try {
                    $paginateArticles = $this->searchWithNYTimes($request);
                    if ($paginateArticles->isEmpty()) {
                        return response()->json([
                            'status' => false,
                            'message' => 'No articles found',
                        ], 404);
                    }

                    return response()->json([
                        'status' => true,
                        'message' => $message,
                        'articles' => $paginateArticles,
                    ], 200);

                } catch (\Exception$ex) {
                    return response()->json(['error' => $ex->getMessage()], 500);
                }
                break;
            case 'guardian';
                try {
                    $paginateArticles = $this->searchWithGuardian($request);
                    if ($paginateArticles->isEmpty()) {
                        return response()->json([
                            'status' => false,
                            'message' => 'No articles found',
                        ], 404);
                    }

                    return response()->json([
                        'status' => true,
                        'message' => $message,
                        'articles' => $paginateArticles,
                    ], 200);
                } catch (\Exception$ex) {
                    return response()->json(['error' => $ex->getMessage()], 500);
                }
                break;
            case 'newsapi';
                try {
                    $paginateArticles = $this->searchWithNewsAPI($request);
                    if ($paginateArticles->isEmpty()) {
                        return response()->json([
                            'status' => false,
                            'message' => 'No articles found',
                        ], 404);
                    }

                    return response()->json([
                        'status' => true,
                        'message' => $message,
                        'articles' => $paginateArticles,
                    ], 200);
                } catch (\Exception$ex) {
                    return response()->json(['error' => $ex->getMessage()], 500);
                }
            default:
                # code...
                break;
        }
    }

    /**
     * Paginate articles
     * @param $articles
     * @param $perPage
     * @param $currentPage
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginateArticles($articles, $perPage, $currentPage)
    {
        $offset = ($currentPage * $perPage) - $perPage;

        $paginator = new LengthAwarePaginator(
            array_slice($articles, $offset, $perPage, true),
            count($articles),
            $perPage,
            $currentPage,
            ['path' => request()->url(), 'keyword' => request()->query()]
        );
        return $paginator;
    }

    /**
     * Search New York Times articles
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchWithNYTimes(Request $request)
    {
        list($keyword, $perPage, $currentPage, $beginDate, $endDate) = $this->getRequestInputs($request);
        $api = new NYTimesAPIService();
        $response = $api->searchArticles($keyword, $beginDate, $endDate);

        $articles = $response->data['response']['docs'];

        $paginateArticles = $this->paginateArticles($articles, $perPage, $currentPage);
        return $paginateArticles;

    }

    /**
     * Search Guardian articles
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchWithGuardian(Request $request)
    {
        list($keyword, $perPage, $currentPage, $beginDate, $endDate, $fromDate, $tag) = $this->getRequestInputs($request);
        $api = new GuardianAPIService();
        $response = $api->searchArticles($keyword, $fromDate, $tag);

        $articles = $response->data['response']['results'];
        $paginateArticles = $this->paginateArticles($articles, $perPage, $currentPage);
        return $paginateArticles;
    }

    /**
     * Search NewsAPI articles
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchWithNewsAPI(Request $request)
    {
        list($keyword, $perPage, $currentPage, $fromDate) = $this->getRequestInputs($request);
        $api = new NewsAPIService();
        $response = $api->searchArticles($keyword, $fromDate);

        $articles = $response->data['articles'];
        $paginateArticles = $this->paginateArticles($articles, $perPage, $currentPage, $fromDate);
        return $paginateArticles;
    }

    /**
     * Get Request inputs
     * @param Request $request
     * @return array
     */
    public function getRequestInputs(Request $request)
    {
        $inputs = $request->all();
        $keyword = $inputs['keyword'];
        $perPage = $inputs['per_page'] ?? 5;
        $currentPage = $inputs['current_page'] ?? 1;
        $endDate = $inputs['end_date'] ?? null;
        $fromDate = $inputs['from_date'] ?? null;
        // format in Ymd
        $beginDate = $fromDate ? date('Ymd', strtotime($fromDate)) : null;
        $tag = $inputs['tag'] ?? null;

        return [$keyword, $perPage, $currentPage, $beginDate, $endDate, $fromDate, $tag];
    }
}
