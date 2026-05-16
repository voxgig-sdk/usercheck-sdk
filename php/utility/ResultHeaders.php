<?php
declare(strict_types=1);

// Usercheck SDK utility: result_headers

class UsercheckResultHeaders
{
    public static function call(UsercheckContext $ctx): ?UsercheckResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
