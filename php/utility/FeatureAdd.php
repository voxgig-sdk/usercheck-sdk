<?php
declare(strict_types=1);

// Usercheck SDK utility: feature_add

class UsercheckFeatureAdd
{
    public static function call(UsercheckContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
