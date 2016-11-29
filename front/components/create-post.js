import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

//     |||                                 |||
// ----VVV------ PLEASE SCROLL DOWN -------VVV


//CreatePost component that creates a new post
// const CreatePost = React.createClass({
//   getInitialState() {
//     return {
//       post: {},
//       title: '',
//       author:'',
//       body: ''
//     }
//   },
//   handleChange(inputField, e) {
//     this.setState({[inputField]: e.target.value})
//   },
//   submitNewPost() {
//     $.ajax({
//       url: '/new-posts',
//       type: 'POST',
//       data: {
//         title: this.state.title,
//         author: this.state.author,
//         text: this.state.body
//       }
//     })
//   },
//   render(){
//     return (
//       <form>
//         <h1>Submit a post:</h1>
//         <label>Title: </label>
//         <input  type="text" name="title" />
//         <br/>
//         <br/>
//         <label>Author: </label>
//         <input  type="text" name="author" />
//         <br/>
//         <label>Body: </label>
//         <input type="text" name="body" />
//         <br/>
//         <br/>
//          type="button" value="Submit" />

//       </form>
//     )
//   }
// })

// THE CREATE POSTS COMPONENT -----------------------------------------------------------------------------------
var CreatePost = React.createClass({

  // GET THE INITIAL STATE
    getInitialState() {
    return {
      post: {},
      title: '',
      author:'',
      body: ''
    }
  },

  // THE HANDLE CHANGE METHOD
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },

  // SUBMIT A NEW POST FUNCTION
  submitNewPost() {
    $.ajax({
      url: '/new-posts',
      type: 'POST',
      data: {
        title: this.state.title,
        author: this.state.author,
        text: this.state.body
      }
    })
  },

  // THE RENDER FUNCTION
  render: function() {
    return (
      <div>
        <div className="createdivheader">
          <center><h1 id="posthead">Create a Post of your own!</h1></center>
        </div>
        
        <div className="createdivbody">

          <center>
            <form className="createform">

              <input onChange={this.handleChange.bind(this, 'author')} type="text" placeholder="Enter your Name here" id="nameinput" />
              <input onChange={this.handleChange.bind(this, 'title')} type="text" placeholder="Topic/ Title" id="title" />

              <center>
                <textarea onChange={this.handleChange.bind(this, 'body')} type="textbox" placeholder="Write your Blog here..." id="write" />              
              </center>

              <Link to="/postsList"><button onClick={this.submitNewPost} id="buttonsubmitblog">Submit</button></Link>

            </form>
          </center>
        </div>

      </div>
    )
  }
})

export default CreatePost;
