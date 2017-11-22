/**
 * Cloud site for v
 * @module v-cloud
 */
'use strict'

const VCloud = require('./VCloud')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  VCloud,
  create
})

module.exports = lib
