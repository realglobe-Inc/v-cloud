/**
 * Test for VCloud.
 * Runs with mocha.
 */
'use strict'

const VCloud = require('../lib/VCloud')
const {ok, equal} = require('assert')
const aport = require('aport')
const vSpotWS = require('v-spot-ws')

describe('v-cloud', function () {
  this.timeout(8000)

  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    const port = await aport()
    const vCloud = new VCloud()

    const client01 = vSpotWS.client()
    const client02 = vSpotWS.client()

    client01.load({
      hi: (msg) => `hi, ${msg}`
    }, 'jp.v-cloud.test.bess')

    await vCloud.listen(port)

    // const cloudURL = `http://localhost:${port}`
    const cloudURL = 'https://v.realglobe.work'
    await client01.connect(cloudURL)
    await client02.connect(cloudURL)
    try {

      const bess = await client02.use('jp.v-cloud.test.bess')
      equal(
        await bess.hi('john'),
        'hi, john'
      )
    } finally {
      await client01.disconnect()
      await client02.disconnect()
      await vCloud.close()
    }
  })
})

/* global describe, before, after, it */
