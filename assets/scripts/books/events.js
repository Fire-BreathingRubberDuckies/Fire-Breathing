'use strict'

const api = require('./api')
const ui = require('./ui')

const onShowBooks = function (event) {
  event.preventDefault()
  api.showBooks()
    .then(ui.onShowBooksSuccess)
    .catch(ui.onShowBooksFailure)
}

module.exports = {
  onShowBooks
}
