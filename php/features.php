<?php
declare(strict_types=1);

// Usercheck SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class UsercheckFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new UsercheckBaseFeature();
            case "test":
                return new UsercheckTestFeature();
            default:
                return new UsercheckBaseFeature();
        }
    }
}
