

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"domain":{"a":true,"h":"Domain","n":"domain","r":false,"sh":"The domain that was verified","t":"`$STRING`","key$":"domain","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"message":{"a":true,"h":"Message","n":"message","r":false,"sh":"Additional information about the verification result","t":"`$STRING`","key$":"message","index$":2},"valid":{"a":true,"h":"Valid","n":"valid","r":false,"sh":"Indicates whether the domain is valid","t":"`$BOOLEAN`","key$":"valid","index$":3}},"id":{"field":"id","name":"id"},"name":"domain","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /domain/{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"example.com","k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/domain/{domain}","q":{"exist":["id"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"domain"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"domain","name__orig":"domain","Name":"Domain","name_":"domain","name-":"domain","NAME":"DOMAIN","index$":0}, {"active":true,"entity":"domain","key$":"BasicDomainFlow","kind":"basic","name":"BasicDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_dt0"},"m":{"id":"domain01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"index$":0}]}, 'Domain', {"GET /domain/{domain}":{"protocol":"http","operationId":"verifyDomain","responses":{"200":{"description":"Domain verification successful","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","description":"The domain that was verified","example":"example.com","key$":"domain"},"valid":{"type":"boolean","description":"Indicates whether the domain is valid","example":true,"key$":"valid"},"message":{"type":"string","description":"Additional information about the verification result","example":"Domain is valid","key$":"message"}},"index$":0},"examples":{"validDomain":{"summary":"Valid domain response","value":{"domain":"example.com","valid":true,"message":"Domain is valid"}},"invalidDomain":{"summary":"Invalid domain response","value":{"domain":"invalid-domain-example.com","valid":false,"message":"Domain is invalid"}}}}}},"400":{"description":"Bad request - Invalid domain format","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message","example":"Invalid domain format"}}}}}},"429":{"description":"Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message indicating rate limit exceeded","example":"Rate limit exceeded"},"retryAfter":{"type":"integer","description":"Number of seconds to wait before retrying","example":60}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message","example":"Internal server error"}}}}}}},"parameters":[{"name":"domain","in":"path","description":"The domain name to verify","required":true,"schema":{"type":"string","example":"example.com"},"index$":0}],"securitySource":"unspecified"}})
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
  
