const _ = require('underscore')

module.exports = function () {

  let pub = {}

  pub.error = {}

  pub.error.empty = function (value) {
    return _.isEmpty(value)
  }

  pub.error.out_of_range = function (min, max) {
    return (val) => val < min || val > max
  }

  return pub

}