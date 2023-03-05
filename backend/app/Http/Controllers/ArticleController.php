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
        $validator = Validator::make($request->all(), [
            'query' => 'required|string|min:3|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        try {
            $query = $request->input('query');
            $api = new NYTimesAPIService();
            $response = $api->searchArticles($query);

            dd($response);
        } catch (\Exception$ex) {
            dd($ex);
            return response()->json(['error' => $ex->getMessage()], 500);
        }
        // $articles = collect($response->data['response']['docs']);
    }
}
