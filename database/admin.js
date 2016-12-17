const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const Admin = new Schema ({
  facebook: {
    id: String,
    token: String,
    name: String,
    picture: String,
    gender: String
  },
  articles: [{type: Schema.Types.ObjectId, ref: 'Article'}]
})

module.exports = mongoose.model('Admin',Admin,'Admin')