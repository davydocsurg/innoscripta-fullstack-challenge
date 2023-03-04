<?php

namespace App\Http\APIs\NYTimesAPI;

class NYTimesAPIResponse
{
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function getResults()
    {
        return collect($this->data['results']['docs']);
    }

    public function toArray()
    {
        return $this->data;
    }
}
