import React from 'react';
import ReactDOM from 'react-dom';

// THE HEADER COMPONENT
var Header = React.createClass({
	render: function() {
		return (
			<div>
				<div  className="headerDiv navbar-fixed-top">
					<h1 className="logo">TECH<span id="blog">BLOG</span></h1>
					<h3><span className="glyphicon glyphicon-search" id="mag"></span></h3><input type="text" placeholder="Search Blogs..." className="searchbar" />
				</div>
			</div>
		)
	}
})

export default Header;