const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const Article = new Schema ({
  admin_: {type: Schema.Types.ObjectId, ref: 'Admin'},
  url: String,
  title: String,
  author: String,
  description: String,
  complexity: Number,
  image: String,
  tags_: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
  added: Date
})

module.exports = mongoose.model('Article',Article,'Article')