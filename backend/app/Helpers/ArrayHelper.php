<?php

namespace App\Helpers;

use App\Helpers\DefaultArray;

class ArrayHelper
{
    /**
     * Retrieves the value of a specified key from an array, or a default value if the key does not exist.
     *
     * @param array  $array   The input array to retrieve a value from.
     * @param string $key     The key to retrieve the value for.
     * @param mixed  $default Optional. The default value to return if the key does not exist in the input array. Defaults to null.
     *
     * @return mixed The value for the specified key in the input array, or the default value if the key does not exist.
     */
    public static function getArrayValue(array $array, string $key, $default = null)
    {
        // Check if the specified key exists in the input array, and retrieve its value if it does.
        // If the key does not exist, set the value to a new DefaultArray object.
        $value = $array[$key] ?? new DefaultArray();

        // Check if the value is an instance of DefaultArray. If it is, return the default value.
        if ($value instanceof DefaultArray) {
            return $default;
        }

        // If the value is not an instance of DefaultArray, it is a valid value in the input array, so return it.
        return $value;
    }

}
