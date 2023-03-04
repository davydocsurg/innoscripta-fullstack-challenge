<?php

namespace App\Http\APIs;

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
    protected $data;

    /**
     * Constructs a new BaseAPI instance with the given API key, parameter key, and base URL.
     *
     * @param string $key The API key to use for authentication with the API.
     * @param string $requestParamKey The name of the parameter to use when passing the API key in API requests.
     * @param string $baseUrl The base URL for the API.
     */
    public function __construct(string $key, string $requestParamKey, string $baseUrl)
    {
        $this->key = $key;
        $this->requestParamKey = $requestParamKey;
        $this->baseUrl = $baseUrl;
    }

}
