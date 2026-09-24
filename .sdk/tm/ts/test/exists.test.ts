
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UsercheckSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = UsercheckSDK.test()
    equal(testsdk instanceof UsercheckSDK, true,
      'UsercheckSDK.test() must return a client synchronously')
  })

})
