
module.exports = function () {

  var public = {}

  /*
  * Get articles that contain at least 1 of the requested tags
  */
  public.by_tags = function (req, res, next) {
    const tags = req.query.tags.map(param => param.toLowerCase())
    Article.find({'tags': {$in: tags}}, {sort: 'complexity'}, 
      (err, articles) => {
        res.send(articles)
      }
    )
  }  

  return public

}