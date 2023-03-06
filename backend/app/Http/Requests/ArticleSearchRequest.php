<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleSearchRequest extends FormRequest
{
    public function rules()
    {
        return [
            'source' => 'required|string|in:nytimes,guardian',
            'query' => 'required|string|min:3|max:20',
            'current_page' => 'sometimes|required|numeric|min:1|max:20',
        ];
    }

    public function messages()
    {
        return [
            'source.required' => 'Select a source',
            'source.in' => 'The source you selected is not valid',
            'query.required' => 'Kindly enter your search term',
            'query.max' => 'Your search term is too long',
            'current_page.required' => 'Select the page you want to view',
            'current_page.max' => 'The page you selected is not valid',
        ];
    }
}
