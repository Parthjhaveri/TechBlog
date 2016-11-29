
// ------------------------------+
// PARTH AND ILIAS BLOG PROJECT  |
// ------------------------------+


// THIS IS WHERE WE IMPORT REACT, ROUTER AND JQUERY
import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {IndexRoute ,Router, Route, browserHistory} from 'react-router'

// THIS IS WHERE WE IMPORT ALL THE CHILDREN COMPONENTS
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Home from './components/home.js';

// IMPORT EVERYTHING FOR THE POSTS
import CreatePost from './components/create-post';
import Posts from './components/posts';
import Post from './components/post';

// POST COMPONENTS 
import PostPage from './components/postPage';
import NoRoute from './components/NoRoute';
import Comments from './components/comments.js'
import createComment from './components/create-comment.js'

// THE HOME COMPONENT WHICH WILL RENDER ALL THE COMPONENTS ---------------------
var Parent = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})

// THIS IS WHERE WE WILL RENDER EVERYTHING -------------------------------------
ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={Parent}>
      <IndexRoute component={Home}/>
  	    <Route path="/postsList" component={Posts} />
  	    <Route path="create-post" component={CreatePost} />
  	    <Route path="/post/:id" component={PostPage} >
      <IndexRoute/>
	    	<Route component={createComment} />
	    	<Route component={Comments}/>
	    </Route>
	 </Route>
	 <Route path="*" component={NoRoute} />
  </Router>,
  document.getElementById('root')
)
