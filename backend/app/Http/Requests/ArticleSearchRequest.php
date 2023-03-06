<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

class ArticleSearchRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'query' => 'required|string|min:2|max:20',
            'per_page' => 'nullable|integer|min:1|max:100',
            'current_page' => 'nullable|integer|min:1|max:20',
        ];
    }

    public function messages()
    {
        return [
            'query.required' => 'Kindly enter your search term',
            'query.min' => 'Your search term is too short',
            'query.max' => 'Your search term is too long',
            'per_page.integer' => 'The number of articles per page must be an integer',
            'per_page.min' => 'The number of articles per page must be at least 1',
            'per_page.max' => 'The number of articles per page must not exceed 100',
            'current_page.integer' => 'The current page number must be an integer',
            'current_page.min' => 'The current page number must be at least 1',
            'current_page.max' => 'The current page number must not exceed 20',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Validation error',
            'errors' => $validator->errors(),
        ], JsonResponse::HTTP_BAD_REQUEST));
    }
}
