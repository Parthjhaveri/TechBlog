// THIS IS WHERE WE WILL IMPORT EVERYTHING
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

// THE COMPONENT TO CREATE ALL THE COMMENTS
const CreateComment = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
    return {
      username: '',
      text: '',
      rating: '',
      date: Date.now()
    }
  },

  // THE HANDLE CHANGE FUNCTION
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },

  // SEND THE COMMENT REQUEST
  sendCommentRequest() {
    let that = this
    $.ajax({
      url: '/new-comments',
      type: 'POST',
      data: {
        username: this.state.username,
        text: this.state.text,
        rating: this.state.rating,
        data: this.state.date
      }
    })
  },

  // THE RENDER FUNCTION
  render: function() {
    return (
      
      // THIS IS THE FORM THAT WILL ENABLE CREATION OF NEW POSTS
      <form>
        <h1>Add Comments:</h1>
        <label>Username: </label>
        <input onChange={this.handleChange.bind(this, 'username')} type="text" name="username" />
        <br/>
        <br/>
        <label>Comment: </label>
        <input onChange={this.handleChange.bind(this, 'text')} type="text" name="text" />
        <br/>
        <label>Rating: </label>
        <input onChange={this.handleChange.bind(this, 'rating')} type="text" name="rating" />
        <br/>
        <br/>
        <Link to="/new-comments"><input onClick={this.sendCommentRequest} type="button" value="Send a comment" /></Link>
      </form>
    )
  }
})

// EXPORT THE COMPONENT
export default CreateComment;