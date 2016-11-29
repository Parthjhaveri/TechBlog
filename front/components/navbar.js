import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'

// THE NAVBAR COMPONENT --------------------------------------------------
//------------------------------------------------------------------------
// var Navbar = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="nav">
// 				<h1 id="ham"><span className="glyphicon glyphicon-menu-hamburger"></span></h1>

// 				<div className="contentspace" id="topone">
// 					<center><h2>HOME</h2></center>
// 				</div>

// 				<div className="contentspace" id="toptwo">
// 					<Link to="/postsList"><center><h2>POSTS</h2></center></Link>
// 				</div>

// 				<div className="contentspace" id="topthree">
// 					<Link to="/create-post"><center><h2>CREATE</h2></center></Link>
// 				</div>


//          	</div>
// 		)
// 	}
// })
var Navbar = React.createClass({
	render: function() {
		return (
			<div className="nav">
				<h1 id="ham"><span className="glyphicon glyphicon-menu-hamburger"></span></h1>

				<div className="contentspace" id="topone">
					<center><h2>HOME</h2></center>
				</div>

				<div className="contentspace" id="toptwo">
					<Link to="/postsList"><center><h2>POSTS</h2></center></Link>
				</div>

				<div className="contentspace" id="topthree">
					<Link to="/create-post"><center><h2>CREATE</h2></center></Link>
				</div>


         	</div>
		)
	}
})


export default Navbar;