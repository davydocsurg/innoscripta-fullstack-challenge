<?php

namespace App\Http\Controllers;

use App\Http\APIs\NYTimesAPI\NYTimesAPIService;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Search for articles
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        $searchValidation = $this->validator($request);
        if ($searchValidation->fails()) {
            return response()->json(['error' => $searchValidation->errors()], 400);
        }

        try {
            $query = $request->input('query');
            $perPage = $request->input('per_page', 5);
            $page = $request->input('page', 2);

            $api = new NYTimesAPIService();
            $response = $api->searchArticles($query);

            $articles = $response->data['response']['docs'];
            $paginateArticles = $this->paginateArticles($articles, $perPage, $page);
            return response()->json([
                'status' => true,
                'message' => 'Articles fetched successfully',
                'articles' => $paginateArticles,
            ], 200);
        } catch (\Exception$ex) {
            // dd($ex);
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    /**
     * Article search validator
     * @param Request $request
     * @param array $customRules
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(Request $request)
    {
        // custom messages
        $messages = [
            'query.required' => 'Kindly enter your search term',
            'query.max' => 'Your search term is too long',
            // 'page_size.required' => 'Select the number of pages you want',
            // 'page_size.max' => 'The number of pages must not be greater than 20.',
        ];

        return Validator::make($request->all(), [
            'query' => 'required|string|min:3|max:20',
            // 'page_size' => 'required|numeric|min:1|max:20',
        ], $messages);
    }

    /**
     * Paginate articles
     * @param $articles
     * @param $perPage
     * @param $page
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginateArticles($articles, $perPage, $page)
    {
        $offset = ($page * $perPage) - $perPage;

        $paginator = new LengthAwarePaginator(
            array_slice($articles, $offset, $perPage, true),
            count($articles),
            $perPage,
            $page,
            ['path' => request()->url(), 'query' => request()->query()]
        );
        return $paginator;
    }
}
