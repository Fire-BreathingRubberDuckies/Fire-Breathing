'use strict'

const config = require('../config.js')

const showBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  showBooks
}
