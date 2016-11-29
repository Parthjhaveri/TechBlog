import React from 'react';
import {Link} from 'react-router';

//Post component that displays the title, author and body of the comment
const Comment = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.comment.username}</h2>
        <p>{this.props.comment.text}</p>
        <p>{this.props.comment.likeOrDislike}</p>
      </div>
    );
  }
});

export default Comment;