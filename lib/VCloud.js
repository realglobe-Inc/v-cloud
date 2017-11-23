/**
 * @class VCloud
 */
'use strict'

const SpotFor = require('./SpotFor')
const winston = require('winston')
const amkdirp = require('amkdirp')
const path = require('path')

/** @lends VCloud */
class VCloud {
  constructor (options = {}) {
    const s = this

    const {
      connector = 'ws',
      logFile = 'var/log/v-cloud.log'
    } = options

    s.spot = SpotFor(connector)()
    s.logFile = logFile
    s.logger = winston.createLogger({
      level: 'info',
      transports: [
        new winston.transports.File({filename: logFile})
      ]
    })

  }

  async listen (port) {
    const s = this
    await s.spot.listen(port)
    await amkdirp(path.dirname(s.logFile))
    s.spot.on('client:connect', (clientId) => s.logger.info(`connected: ${clientId}`))
    s.spot.on('client:disconnect', (clientId) => s.logger.info(`disconnect: ${clientId}`))
  }

  async close () {
    const s = this
    await s.spot.close()
  }
}

module.exports = VCloud
