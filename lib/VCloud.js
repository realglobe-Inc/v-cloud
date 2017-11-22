/**
 * @class VCloud
 */
'use strict'

const SpotFor = require('./SpotFor')

/** @lends VCloud */
class VCloud {
  constructor (connector = 'ws') {
    const s = this

    s.spot = SpotFor(connector)()
  }

  async listen (port) {
    const s = this
    await s.spot.listen(port)
  }

  async close () {
    const s = this
    await s.spot.close()
  }
}

module.exports = VCloud
