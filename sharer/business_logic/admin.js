
module.exports = function () {

  public = {}

  /*
  * Returns name, picture and _id
  */
  public.get_basics = function (req, res) {
    if (req.user) {
      res.send({
        id: req.user._id,
        name: req.user.facebook.name, 
        picture: req.user.facebook.picture
      })
    } else {
      res.send({})
    }
  }


  return public

}