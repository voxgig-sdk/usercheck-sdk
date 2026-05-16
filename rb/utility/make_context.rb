# Usercheck SDK utility: make_context
require_relative '../core/context'
module UsercheckUtilities
  MakeContext = ->(ctxmap, basectx) {
    UsercheckContext.new(ctxmap, basectx)
  }
end
