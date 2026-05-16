<?php
declare(strict_types=1);

// Usercheck SDK utility: prepare_body

class UsercheckPrepareBody
{
    public static function call(UsercheckContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
