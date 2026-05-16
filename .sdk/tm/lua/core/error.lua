-- Usercheck SDK error

local UsercheckError = {}
UsercheckError.__index = UsercheckError


function UsercheckError.new(code, msg, ctx)
  local self = setmetatable({}, UsercheckError)
  self.is_sdk_error = true
  self.sdk = "Usercheck"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function UsercheckError:error()
  return self.msg
end


function UsercheckError:__tostring()
  return self.msg
end


return UsercheckError
