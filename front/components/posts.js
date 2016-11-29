
// ------------------------------+
// PARTH AND ILIAS BLOG PROJECT  |
// ------------------------------+

// IMPORT EVERYTHING
import React from 'react';
import Post from './post.js';
import $ from 'jquery';

// -----------------------------------------------------------------------+
// THIS IS POSTS PAGE THAT DISPLAYS ALL THE ADDED POSTS FROM THE DATABASE |
// -----------------------------------------------------------------------+


// THE POSTS COMPONENT -----------------------------------------------------------------------------------------
var Posts = React.createClass({
  getInitialState() {
    return {posts: []}
  },

  // COMPONENT DID MOUNT FUNCTION
  componentDidMount() {
    $.ajax({         // API CALL TO GET THE POSTS FROM THE DATABASE
      url: '/posts',
      type: 'GET'
    })
    .done((data) => {
      console.log('ajax data from PostsList',data)
      this.setState({posts: data});
    })
  },

  // THE RENDER FUNCTION
  render: function() {
    return (
      <div>
        <div className="postsHeader">
          <center><h1 id="poststitle">Read our Blogs</h1></center>
          <hr id="posthr" />
          <center><h3 id="createyourown"><em>Create your own!</em></h3></center>
          {this.state.posts.map((post, indx) => <Post key={indx} post={post} />)}
        </div>
      </div>
    )
  }
})

// EXPORT THIS COMPONENT
export default Posts;


// ------------------+
// OMIT THIS FOR NOW |
// ------------------+


// const Posts = React.createClass({
//   getInitialState() {
//     return {posts: []}
//   },
//   componentDidMount() {
//   	//Api call to get the posts from the database
//     $.ajax({
//       url: '/posts',
//       type: 'GET'
//     })
//     .done((data) => {
//     	console.log('ajax data from PostsList',data)
//       this.setState({posts: data});
//     })
//   },
//   render: function() {
//     return (
//       <div>
//       	<h1>Posts:</h1>
        
//       </div>
//     );
//   }

// });
