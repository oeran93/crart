const Tag = require('../../database/tag.js')

module.exports = function () {

  var public = {}

  /*
  * Get all tags
  */
  public.get_all = function (req, res) {
    Tag.find({})
    .limit(30)
    .sort('-number')
    .exec((err,tags) => {
      if (err) res.sendStatus(500)
      res.send(tags)
    })
  }
  
  /*
  * Increment all given tags numbers by 1
  * @param tags {array} ObjectIds of tags 
  */
  public.increment = function (tags) {
    tags.forEach(tag => {
      Tag.findOneAndUpdate(
        {_id: tag},
        {$inc: {number: 1}}
      ).exec()
    })
  }

  /*
  * Find similar tags given a string
  */
  public.find_by_name = function (req, res) {
    const {tag_name} = req.body
    Tag.find({name: new RegExp('.*'+tag_name+'.*', 'i')})
    .limit(5)
    .exec((err, tags) => {
      if (err) res.sendStatus(500)
      res.send(tags)
    })
  }

  return public

}