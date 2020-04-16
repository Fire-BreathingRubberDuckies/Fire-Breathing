'use strict'

const showBooksTemplate = require('../templates/book-index.handlebars')

const onShowBooksSuccess = function (data) {
  // console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
}

module.exports = {
  onShowBooksSuccess
}
