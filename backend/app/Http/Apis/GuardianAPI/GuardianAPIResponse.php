<?php

namespace App\Http\APIs\GuardianAPI;

class GuardianAPIResponse
{
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function getResults()
    {
        return collect($this->data['response']['results']);
    }

    public function toArray()
    {
        return $this->data;
    }
}
