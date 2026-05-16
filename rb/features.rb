# Usercheck SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module UsercheckFeatures
  def self.make_feature(name)
    case name
    when "base"
      UsercheckBaseFeature.new
    when "test"
      UsercheckTestFeature.new
    else
      UsercheckBaseFeature.new
    end
  end
end
