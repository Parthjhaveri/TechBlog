import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

// THE FOOTER CONTENT -------------------------------------------------------------------------------------------
var Footer = React.createClass({
	render: function() {
		return (
			<div>
		    	<div className="footerCon" >
		    		<center>
		    			<Link to="postsList"><h1 className="footerText">POSTS</h1></Link>
		    			<Link to="create-post"><h1 className="footerText">CREATE</h1></Link>
		    			<h1 className="footerText">SIGN UP</h1>
		    		</center>
				</div>
			</div>
		)
	}
})

export default Footer;