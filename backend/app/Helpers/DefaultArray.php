<?php

namespace App\Helpers;

use ArrayAccess;

/**
 * Class DefaultArray
 * @package App\Helpers
 *
 * Provides a default value when accessing non-existent keys in an array.
 */
class DefaultArray implements ArrayAccess
{
    /**
     * @inheritdoc
     */
    public function offsetExists(mixed $offset): bool
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function offsetGet($offset)
    {
        return $this;
    }

    /**
     * @inheritdoc
     */
    public function offsetSet(mixed $offset, mixed $value): void
    {
        // Do nothing
    }

    /**
     * @inheritdoc
     */
    public function offsetUnset(mixed $offset): void
    {
        // Do nothing
    }
}
