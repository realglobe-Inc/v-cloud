/**
 * Local variables
 * @file Local
 */

'use strict'

const theSeat = require('the-seat')
const seat = theSeat()
const crypto = require('crypto')
const pkg = require('./package.json')

const portFor = (name, portBase = 7000) =>
  seat.scope('ports').acquire(name, (port = portBase) => port + 1)

const projectFor = (name, length = 3) => [
  name.split('@')[0],
  seat.scope('projects').acquire(name, () => crypto.randomBytes(length).toString('hex'))
].join('-')

const PROJECT_PREFIX = projectFor(`${pkg.name}@${__dirname}`).replace(/-/g, '')
const Vars = Object.freeze(Object.assign({
  APP_PORT: portFor(`app@${__dirname}`),
  APP_PROCESS_NAME: `${PROJECT_PREFIX}`
}))

const Local = Object.assign({}, Vars)

module.exports = Local

if (!module.parent) {
  console.log(JSON.stringify(Local, null, '  '))
}

