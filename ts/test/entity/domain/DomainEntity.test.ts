

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { UsercheckSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('DomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when USERCHECK_TEST_LIVE=TRUE.
  afterEach(liveDelay('USERCHECK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UsercheckSDK.test()
    const ent = testsdk.Domain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.USERCHECK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"domain","req":false,"short":"The domain that was verified","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"message","req":false,"short":"Additional information about the verification result","type":"`$STRING`","index$":2},{"active":true,"name":"valid","req":false,"short":"Indicates whether the domain is valid","type":"`$BOOLEAN`","index$":3}],"id":{"field":"id","name":"id"},"name":"domain","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"example.com","kind":"param","name":"id","orig":"domain","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /domain/{domain}","json":"{\"operationId\":\"verifyDomain\",\"parameters\":[{\"description\":\"The domain name to verify\",\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"example\":\"example.com\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"invalidDomain\":{\"summary\":\"Invalid domain response\",\"value\":{\"domain\":\"invalid-domain-example.com\",\"message\":\"Domain is invalid\",\"valid\":false}},\"validDomain\":{\"summary\":\"Valid domain response\",\"value\":{\"domain\":\"example.com\",\"message\":\"Domain is valid\",\"valid\":true}}},\"schema\":{\"properties\":{\"domain\":{\"description\":\"The domain that was verified\",\"example\":\"example.com\",\"type\":\"string\"},\"message\":{\"description\":\"Additional information about the verification result\",\"example\":\"Domain is valid\",\"type\":\"string\"},\"valid\":{\"description\":\"Indicates whether the domain is valid\",\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Domain verification successful\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Invalid domain format\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid domain format\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message indicating rate limit exceeded\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"retryAfter\":{\"description\":\"Number of seconds to wait before retrying\",\"example\":60,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/domain/{domain}","rename":{"param":{"domain":"id"}},"segments":[{"lit":"domain"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"domain","name__orig":"domain","Name":"Domain","name_":"domain","name-":"domain","NAME":"DOMAIN","index$":0}, {"active":true,"entity":"domain","key$":"BasicDomainFlow","kind":"basic","name":"BasicDomainFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_dt0"},"match":{"id":"domain01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"index$":0}]}, 'Domain')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let domain_ref01_data = Object.values(setup.data.existing.domain)[0] as any

    // LOAD
    const domain_ref01_ent = client.Domain()
    const domain_ref01_match_dt0: any = {}
    domain_ref01_match_dt0.id = domain_ref01_data.id
    const domain_ref01_data_dt0 = (await domain_ref01_ent.load(domain_ref01_match_dt0)).data()
    assert(domain_ref01_data_dt0.id === domain_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain/DomainTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = UsercheckSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'USERCHECK_TEST_DOMAIN_ENTID': idmap,
    'USERCHECK_TEST_LIVE': 'FALSE',
    'USERCHECK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['USERCHECK_TEST_DOMAIN_ENTID']

  const live = 'TRUE' === env.USERCHECK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['USERCHECK_TEST_DOMAIN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new UsercheckSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.USERCHECK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
