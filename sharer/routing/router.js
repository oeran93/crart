const Search = require('../business_logic/search.js')()

module.exports = function (app) {
  app.get('/by_tags', Search.by_tags)
}