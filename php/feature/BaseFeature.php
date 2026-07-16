<?php
declare(strict_types=1);

// Usercheck SDK base feature

class UsercheckBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(UsercheckContext $ctx, array $options): void {}
    public function PostConstruct(UsercheckContext $ctx): void {}
    public function PostConstructEntity(UsercheckContext $ctx): void {}
    public function SetData(UsercheckContext $ctx): void {}
    public function GetData(UsercheckContext $ctx): void {}
    public function GetMatch(UsercheckContext $ctx): void {}
    public function SetMatch(UsercheckContext $ctx): void {}
    public function PrePoint(UsercheckContext $ctx): void {}
    public function PreSpec(UsercheckContext $ctx): void {}
    public function PreRequest(UsercheckContext $ctx): void {}
    public function PreResponse(UsercheckContext $ctx): void {}
    public function PreResult(UsercheckContext $ctx): void {}
    public function PreDone(UsercheckContext $ctx): void {}
    public function PreUnexpected(UsercheckContext $ctx): void {}
}
