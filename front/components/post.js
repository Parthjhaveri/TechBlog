// THIS IS WHERE WE WILL IMPORT EVERYTHING
import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

// POST COMPONENT TAHT DISPLAYS THE TITLE, AUTHOR AND BODY OF THE POST 
const Post = React.createClass({

  // GET THE INITIAL STATE
	getInitialState(){
		return {post: {}}
	},

  // DELETE A POST
  deletePost() {

    // AJAX CALL
    $.ajax({
      url: '/post/:id',
      type: 'DELETE'
    })    
    .done((data) => {
      console.log('AJAX data deletePost', data);
      this.setState({post: data});
    })
  },

  // THE RENDER FUNCTION
  render: function() {
    return (
        <div className="postsbody">
          
          <center>

            <div className="leftarr">
              <center><h1><span className="glyphicon glyphicon-chevron-left" id="arrl"></span></h1></center>
            </div>

            <div className="blogbox">

              <div className="datetitleauthor">

                <div className="date">
                </div>

                <div className="title">
                            <Link to={`/post/${this.props.post._id}`}><h2>{this.props.post.title}</h2></Link>
                </div>

                <div className="author">
                  <p>{this.props.post.author}</p>
                </div>

              </div>

              <center>
                <div className="posttext">
                  <p>{this.props.post.text}</p>
                  <p>
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs<br /><br />
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs<br /><br />
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs<br /><br />
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs<br /><br />
                    Most developers getting started with api.nasa.gov wish to leverage NASA data in their 
                    applications and services, and this is encouraged! There are also developers that have 
                    existing APIs that they may wish to contribute to the NASA API site. Below describes two 
                    paths on how to "use" our APIs as well as "contribute" to our API catalog. First, to 
                    get started with using NASA APIs
                  </p>
                </div>
                <input onClick={this.deletePost} type="button" value="Delete Post" />
              </center>

            </div>

            <div className="rightarr">
              <center><h1><span className="glyphicon glyphicon-chevron-right" id="arrr"></span></h1></center>
            </div>

            <center><h2 id="readComments">Read Comments</h2></center>

            <div className="comments">
            </div>

          </center>

        </div>
    );
  }
});

export default Post;