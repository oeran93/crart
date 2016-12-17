
module.exports = (function () {
  
  /*
  * Check if user is logged in. If they are, they send them to
  *   next function in the route. Otherwise send 401 code
  */
  function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next()
    res.sendStatus('401')
  }

})