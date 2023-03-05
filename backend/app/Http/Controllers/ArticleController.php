<?php

namespace App\Http\Controllers;

use App\Http\APIs\NYTimesAPI\NYTimesAPIService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Search for articles
     */
    public function search(Request $request)
    {
        $searchValidation = $this->validator($request);
        if ($searchValidation->fails()) {
            return response()->json(['error' => $searchValidation->errors()], 400);
        }

        try {
            $query = $request->input('query');
            $page = $request->input('page');
            $api = new NYTimesAPIService();
            $response = $api->searchArticles($query, $page);

            dd($response);
        } catch (\Exception$ex) {
            dd($ex);
            return response()->json(['error' => $ex->getMessage()], 500);
        }
        // $articles = collect($response->data['response']['docs']);
    }

    /**
     * Article search validator
     */
    public function validator(Request $request)
    {
        // custom messages
        $messages = [
            'query.required' => 'Kindly enter your search term',
            'query.max' => 'Your search term is too long',
            'page.required' => 'Select the number of pages you want',
            'page.max' => 'The number of pages must not be greater than 20.',
        ];

        return Validator::make($request->all(), [
            'query' => 'required|string|min:3|max:20',
            'page' => 'required|numeric|min:1|max:20',
        ], $messages);
    }
}
