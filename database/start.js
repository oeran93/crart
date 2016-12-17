const mongoose = require('mongoose')
const env = process.env

module.exports = function () {
  const auth = `mongodb://${env.DB_USERNAME}:${env.DB_PASSWORD}@localhost/${env.DB_NAME}`
  mongoose.connect(auth,
    (err, res) => {
      if (err) {
        console.log(err.message);
      }
    }
  ) 
}
