# Usercheck SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module UsercheckFeatures
  def self.make_feature(name)
    case name
    when "base"
      UsercheckBaseFeature.new
    when "ratelimit"
      UsercheckRatelimitFeature.new
    when "retry"
      UsercheckRetryFeature.new
    when "test"
      UsercheckTestFeature.new
    when "timeout"
      UsercheckTimeoutFeature.new
    else
      UsercheckBaseFeature.new
    end
  end
end
