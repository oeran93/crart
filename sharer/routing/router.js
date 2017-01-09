const Tag     = require('../business_logic/tag.js')()
const Article = require('../business_logic/article.js')()
const Admin   = require('../business_logic/admin.js')()

module.exports = function (app) { 
  app.get('/articles_by_tags', Article.get_by_tags)
  app.get('/tags', Tag.get_all)
  app.post('/tag_by_name', Tag.find_by_name)
  app.post('/add_article', Article.add)
  app.get('/get_admin', Admin.get_basics)
}