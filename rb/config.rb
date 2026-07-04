# Usercheck SDK configuration

module UsercheckConfig
  def self.make_config
    {
      "main" => {
        "name" => "Usercheck",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.usercheck.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "domain" => {},
        },
      },
      "entity" => {
        "domain" => {
          "fields" => [
            {
              "active" => true,
              "name" => "domain",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "message",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "valid",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 2,
            },
          ],
          "name" => "domain",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "example.com",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "domain",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/domain/{domain}",
                  "parts" => [
                    "domain",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "domain" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.domain`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    UsercheckFeatures.make_feature(name)
  end
end
