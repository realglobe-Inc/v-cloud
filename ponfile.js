/**
 * Pon tasks
 * @file Ponfile
 * @see https://github.com/realglobe-Inc/pon
 */
'use strict'

const pon = require('pon')
const pm2 = require('pon-task-pm2')
const {command, env} = require('pon-task-basic')
const {fork} = command

const {
  APP_PROCESS_NAME
} = require('./Local')

module.exports = pon({
  'env:test': env('test'),
  'env:prod': env('production', Object.assign({DEBUG: 'app:*'})),
  'env:debug': env('development', Object.assign({DEBUG: 'app:*'})),
  'debug:server': ['env:debug', fork('bin/app.js')],
  'pm2:app': pm2('./bin/app.js', {name: APP_PROCESS_NAME}),

  start: ['pm2:app/start'],
  stop: ['pm2:app/stop'],

  debug: ['debug:*'],

  d: 'debug'
})