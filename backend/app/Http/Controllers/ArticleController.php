<?php

namespace App\Http\Controllers;

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
            ['path' => request()->url(), 'query' => request()->query()]
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
        $query = $request->input('query');
        $perPage = $request->input('per_page', 5);
        $currentPage = $request->input('current_page', 2);
        $api = new NYTimesAPIService();
        $response = $api->searchArticles($query);

        $articles = $response->data['response']['docs'];
        $paginateArticles = $this->paginateArticles($articles, $perPage, $currentPage);
        return $paginateArticles;

    }
}
