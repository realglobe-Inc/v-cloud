#!/usr/bin/env node

'use strict'

const vCloud = require('../lib')
const {APP_PORT} = require('../Local')

;(async () => {
  await vCloud.listen(APP_PORT)
  console.log(`V Cloud listening on port ${APP_PORT}`)

})().catch((e) => {
  console.error(e)
  process.exit(1)
})
