/**
 * @function SpotFor
 */
'use strict'

/** @lends SpotFor */
function SpotFor (connector) {
  switch (connector) {
    case 'ws': {
      return require('v-spot-ws')
    }
    default:
      throw new Error(`Unknown connector`)
  }
}

module.exports = SpotFor
