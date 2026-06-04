# Usercheck SDK

Detect disposable email domains and check domain validity in real time

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About UserCheck API

[UserCheck](https://www.usercheck.com) is a domain and email validation service designed to detect and block disposable (temporary) email addresses and domains. Its public API exposes a simple HTTP interface for checking whether a domain is valid, active, and trustworthy.

What you get from the API:

- Domain validation lookups via a `GET` request against `https://api.usercheck.com`
- Indications of whether a domain is recognised as disposable / temporary
- Reputation and validity signals useful for sign-up forms and lead capture

The public endpoints support CORS so they can be called from browser-based clients. The provider's own documentation also describes email validation, bulk verification, custom blocklists, and a separate signup-protection ("Gates") decision endpoint; consult the [official docs](https://www.usercheck.com/docs/get-started/overview) for authentication and rate-limit details.

## Try it

**TypeScript**
```bash
npm install usercheck
```

**Python**
```bash
pip install usercheck-sdk
```

**PHP**
```bash
composer require voxgig/usercheck-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/usercheck-sdk/go
```

**Ruby**
```bash
gem install usercheck-sdk
```

**Lua**
```bash
luarocks install usercheck-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { UsercheckSDK } from 'usercheck'

const client = new UsercheckSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o usercheck-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "usercheck": {
      "command": "/abs/path/to/usercheck-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Domain** | A domain name being checked for validity and disposable-email status against `https://api.usercheck.com`. | `/domain/{domain}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from usercheck_sdk import UsercheckSDK

client = UsercheckSDK({})


# Load a specific domain
domain, err = client.Domain(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'usercheck_sdk.php';

$client = new UsercheckSDK([]);


// Load a specific domain
[$domain, $err] = $client->Domain(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/usercheck-sdk/go"

client := sdk.NewUsercheckSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Usercheck_sdk"

client = UsercheckSDK.new({})


# Load a specific domain
domain, err = client.Domain(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("usercheck_sdk")

local client = sdk.new({})


-- Load a specific domain
local domain, err = client:Domain(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = UsercheckSDK.test()
const result = await client.Domain().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = UsercheckSDK.test(None, None)
result, err = client.Domain(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = UsercheckSDK::test(null, null);
[$result, $err] = $client->Domain(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Domain(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = UsercheckSDK.test(nil, nil)
result, err = client.Domain(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Domain(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the UserCheck API

- Upstream: [https://www.usercheck.com](https://www.usercheck.com)
- API docs: [https://www.usercheck.com/docs/get-started/overview](https://www.usercheck.com/docs/get-started/overview)

---

Generated from the UserCheck API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
