<?php
declare(strict_types=1);

// Usercheck SDK exists test

require_once __DIR__ . '/../usercheck_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = UsercheckSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
