/////////////////////////
// Index page - import and organize all models and routes. export for use in server
/////////////////////////

//Models
const Posts = require('./posts/posts-model');
const Comments = require('./comments/comments-model')

//Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-router');
const comments = require('./comments/comments-router')

module.exports = {
  models: {
    Posts: Posts,
    Comments: Comments
  },
  routes: {
    posts: posts,
    home: home,
    comments: comments
  }
}