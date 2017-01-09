const Tag       = require('../../database/tag.js')
const Article   = require('../../database/article.js')
const Admin     = require('../../database/admin.js')
const Tag_Model = require('./tag.js')()

module.exports = function () {

  var public = {}

  /*
  * Creates a new article object
  */
  function create (req) {
    let {url, title, author, description, image, tags_, complexity} = req.body
    return new Article({
      admin_: null,
      url,
      title,
      author,
      description,
      complexity,
      image,
      tags_,
      added: Date.now()
    })
  }

  /*
  * Get articles that contain at least 1 of the requested tags
  */
  public.get_by_tags = function (req, res) {
    const tags = req.query.tags.map(param => param.toLowerCase())
    Article
    .find({'tags_': {$in: tags}})
    .sort('added')
    .exec((err, articles) => {
        if (err) res.sendStatus(500)
        res.send(articles)
      }
    )
  }

  /*
  * Add article
  */
  public.add = function (req, res) {
    let article = create(req)
    article.save(err => {
      if (err) res.sendStatus(500)
      else {
        Admin.update(
          {_id: req.user.id},
          {$push: {'articles': article._id}},
          {},
          () => {
            Tag_Model.increment(article.tags_)
            res.sendStatus(200)
          }
        )
      }
    })
  }

  return public

}