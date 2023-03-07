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
            'keyword' => 'required|string|min:2|max:20',
            'source' => 'required|string|in:nytimes,guardian',
            'per_page' => 'nullable|integer|min:1|max:100',
            'current_page' => 'nullable|integer|min:1|max:20',
            'begin_date' => 'nullable|date_format:Ymd',
            'end_date' => 'nullable|date_format:Ymd',
            'from_date' => 'nullable|date_format:Y-m-d',
            'tag' => 'nullable|string',
        ];
    }

    public function messages()
    {
        return [
            'source.required' => 'Kindly select a source',
            'source.in' => 'The selected source is invalid',
            'keyword.required' => 'Kindly enter your search term',
            'keyword.min' => 'Your search term is too short',
            'keyword.max' => 'Your search term is too long',
            'per_page.integer' => 'The number of articles per page must be an integer',
            'per_page.min' => 'The number of articles per page must be at least 1',
            'per_page.max' => 'The number of articles per page must not exceed 100',
            'current_page.integer' => 'The current page number must be an integer',
            'current_page.min' => 'The current page number must be at least 1',
            'current_page.max' => 'The current page number must not exceed 20',
            'begin_date.date_format' => 'The begin date must be in the format Y m d',
            'end_date.date_format' => 'The end date must be in the format Y m d',
            'from_date.date_format' => 'The from date must be in the format Y-m-d',
            'tag.string' => 'The tag must be a string',
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
