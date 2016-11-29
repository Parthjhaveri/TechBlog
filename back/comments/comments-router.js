// /////////////////////////
// // Routes for getting and creating (aka posting) blog posts
// /////////////////////////

const router = require('express').Router();
const Comments = require('mongoose').model('Comments');

//Configure router for get and post comments
router.route('/')
  .get((req, res) => {
    Comments.find({}, (err, data) => {
      res.send(data);
    })
  })

module.exports = router;

// //Get all posts from database
// const getComments = (req, res) => {
//  Comments.find({}, (err, data) => {
//    console.log(data)
//    res.send(data);
//  })
// }

// //Create a new comment in database
// const postComments = (req, res) => {
//   console.log('req data',req.body)
//   Comments.create(req.body, () => {
//     console.log('comment successfully created');
//   })
// }
// //Get individual posts
// // const getIndividualPosts = (req, res) => {
// //  Post.findById({}, (err, data) => {
// //    res.send(data.params.id);
// //  })
// // }

// //Configure router for get and comments calls
// router.route('/')
//   .get(getComments)
//   .post(postComments)


// module.exports = router;


