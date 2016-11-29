
// ------------------------------+
// PARTH AND ILIAS BLOG PROJECT  |
// ------------------------------+


// THIS IS WHERE WE WILL IMPORT EVERYTHING
import React, {PropTypes} from 'react';
import $ from 'jquery';
import Post from './post';
import {Link} from 'react-router';
import CreateComment from './create-comment';
import Comments from './comments';

// POST PAGE THAT DISPLAYS INDIVIDUAL POSTS
const PostPage = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
    return {post: {}}
  },

  // COMPONENT DID MOUNT WHERE WE PERFORM THE AJAX CALL
  componentDidMount() {
    $.ajax({
      url: `/post/${this.props.params.id}`,
      type: 'GET'
    })
    .done((data) => {
      console.log('AJAX data PostPage Component', data);
      this.setState({post: data});
    })
  },

  // API CALL TO UPDATE A POST------------------------

  // updatePost() {
  //   $.ajax({
  //     url: `/posts/${this.props.params.id}`,
  //     type: 'PUT'
  //   }) 
  //   .done((data) => {
  //     console.log('AJAX updated post data', data);
  //     this.setState({post: data});
  //   })
  // },
  // -------------------------------------------------

  // THE RENDER FUNCTION
  render: function() {
    return this.state.post ? (
      <div>
        <h1>Individual Post:</h1>
        <Post post={this.state.post} />
        <CreateComment />
        <Comments/>
      </div>
    ) : null;
  }
});

// const postsStyle = {
//     backgroundColor: 'azure',
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     height: '100%'
// }

export default PostPage;