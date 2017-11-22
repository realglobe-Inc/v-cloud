/**
 * Create a VCloud instance
 * @function create
 * @param {...*} args
 * @returns {VCloud}
 */
'use strict'

const VCloud = require('./VCloud')

/** @lends create */
function create (...args) {
  return new VCloud(...args)
}

module.exports = create
