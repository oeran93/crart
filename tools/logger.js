const fs = require('fs')

module.exports = function (log_file = 'log.txt') {

  public = {}

  /*
  * write to log
  * @param event {string}
  */
  public.logit = function (event) {
    fs.appendFile(log_file, event+'\n')
  }

  return public

}