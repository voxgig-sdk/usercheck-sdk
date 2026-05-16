# Usercheck SDK exists test

require "minitest/autorun"
require_relative "../Usercheck_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = UsercheckSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
