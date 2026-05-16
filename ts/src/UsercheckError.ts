
import { Context } from './Context'


class UsercheckError extends Error {

  isUsercheckError = true

  sdk = 'Usercheck'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  UsercheckError
}

