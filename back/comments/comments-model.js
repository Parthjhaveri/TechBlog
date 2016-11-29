/////////////////////////
// Schema and database model configuration for blog comments
/////////////////////////

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  username: {type: String, required: true},
  text: {type: String, required: true},
  likeOrDislike: String,
  date: Date,
  postId: String
});

mongoose.model('Comment', commentSchema);