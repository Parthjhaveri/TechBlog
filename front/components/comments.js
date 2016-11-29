// THIS IS WHERE WE WILL IMPORT EVERYTHING
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import Comment from './Comment'

// THE COMMMENTS COMPONENT
const Comments = React.createClass({
  
  // GET THE INITIAL STATE
  getInitialState() {
    return {comments: []}
  },

  // COMPONENT DID MOUNT
  componentDidMount() {
    console.log('commentsList:',this.state.comments)
  	
    // API CALL TO GET THE POSTS FROM THE DATABASE
    $.ajax({
      url: '/comments',
      type: 'GET'
    })
    .done((data) => {
    	console.log('ajax data from CommentsList',data)
      this.setState({comments: data});
    })
  },

  // THIS IS WHERE WE WILL RENDER EVERYTHING
  render: function() {
    return (
      <div>
      	<h1>Comments List:</h1>
        {this.state.comments.map((comment, indx) => <Comment key={indx} comment={comment} />)}
      </div>
    );
  }

});

export default Comments;







