<?php

namespace App\Http\APIs;

use Illuminate\Support\Facades\Http;

/**
 * Base class for interacting with external APIs using Laravel's Http class.
 */
abstract class BaseAPI
{
    /**
     * The API key to use for authentication with the API.
     *
     * @var string
     */
    protected $key;

    /**
     * The name of the parameter to use when passing the API key in API requests.
     *
     * @var string
     */
    protected $requestParamKey;

    /**
     * The base URL for the API.
     *
     * @var string
     */
    protected $baseUrl;

    /**
     * The fully-formed URL for the current API request.
     *
     * @var string|null
     */
    protected $url;

    /**
     * The JSON response data from the API.
     *
     * @var mixed
     */
    public $data;

    /**
     * Constructs a new BaseAPI instance with the given API key, parameter key, and base URL.
     *
     * @param string $key The API key to use for authentication with the API.
     * @param string $requestParamKey The name of the parameter to use when passing the API key in API requests.
     * @param string $baseUrl The base URL for the API.
     */
    public function __construct(string $key, string $requestParamKey, string $baseUrl)
    {
        $this->key = $key; //config('services.nytimes.key');
        $this->requestParamKey = $requestParamKey;
        $this->baseUrl = $baseUrl;
    }

    /**
     * Builds the URL for an API request based on the base URL, API key, and any additional query parameters.
     *
     * @param array $queries The additional query parameters to include in the URL.
     * @return self
     */
    public function buildRequestUrl(array $queries = []): self
    {
        $query = array_merge($queries, [$this->requestParamKey => $this->key]);
        $this->url = $this->baseUrl . '?' . http_build_query($query);

        return $this;
    }

    /** Builds the URL for some API request that require a specific pattern.
     *
     * @param array $queries The additional query parameters to include in the URL.
     * @return self
     */
    public function buildCustomRequestUrl(array $queries = []): self
    {
        $query = array_merge([$this->requestParamKey => $this->key], $queries);
        $this->url = $this->baseUrl . '?' . http_build_query($query);

        return $this;
    }

    /**
     * Performs an API request and stores the response data in the $data property.
     *
     * @return self
     */
    public function sendRequest(): self
    {
        $this->data = Http::get($this->url ?? $this->baseUrl)->json();

        return $this;
    }
}
