<?php
declare(strict_types=1);

// Usercheck SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class UsercheckMakeContext
{
    public static function call(array $ctxmap, ?UsercheckContext $basectx): UsercheckContext
    {
        return new UsercheckContext($ctxmap, $basectx);
    }
}
