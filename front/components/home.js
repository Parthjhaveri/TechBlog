// THIS IS WHERE WE WILL IMPORT EVERYTHING
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer.js';
import Navbar from './navbar.js';
import Header from './header.js';
// import StyleSheet from 'react-style';

// THIS IS OUR PARENT COMPONENT-------------------------------------------------------------------------------------------
var Home = React.createClass({
  render: function() {

    return (
      <div>
        <div className="header">

        	<center>
	        	<div className="whiteback">
	        		<center><h1 id="splasherheading">WELCOME TO TECH<span id="redred">BLOG</span></h1></center>
	        		
	        		<div className="yellow">
	        		<center><h2 id="most"><strong><span className="glyphicon glyphicon-triangle-bottom" id="arrow"></span>Most Popular</strong></h2></center>
        			</div>

	        	</div>
        	</center>

        	<div className="conttw">
        		
        	<center>
        	<div className="row">
			  
			  <div className="col-md-6">
			  	<img src="https://ss7.vzw.com/is/image/VerizonWireless/Verizon_Iphone_7_BuyNow_D_6s_090716?scl=2&extend=0,85,200,0&scl=2" className="img-responsive" alt="Responsive image" id="iphone"/>
			  </div>

			  <div className="col-md-6">
			  	  	<div className="whiteinfo">
			  	  		<center><h3>Blog about the latest in SmartPhone Technology</h3></center>
			  	  		<center><h3>Read some of our Blogs from Industry experts</h3></center>
			  	  		<br/>
			  	  		<center><h2><strong>Be a part of our Discussion Panel!</strong></h2></center>
			  		</div>

			  </div>

			</div>
        	</center>

        	<center>
        	 	<div className="row">
			  
			  <div className="col-md-6">

			  	<div className="orangeinfo">
				  	<center>
				  		<h2>Catch up on the latest news!</h2></center>
				  	  		<center><h3>Apple, Microsoft, Google & more!</h3></center>
				  	  		<br/>
				  	  		<center><h2><strong>Sign up for a FREE acount Today!</strong></h2>
				  	</center>
			  	</div>
			  	
			  </div>

			  <div className="col-md-6">
			  	<img src="http://tidbits.com/resources/2014-07/MacBook-Air.png"  className="img-responsive" alt="Responsive image" />
			  </div>

			</div>


        	
        	</center>

        	</div>

        	<div className="intro">
        		<center><h1 id="introintro">Tech Blog, News, Discussion & more!</h1></center>
        	</div>

        <div className="paidpartner">
        	<center><h1>Paid Partner Content</h1></center>
        	<hr id="redhr" />

        	<center>
	        	<div className="box" id="lt">
	        	</div>

	        	<div className="box" id="doc">
	        	</div>

	        	<div className="box" id="gc">
	        	</div>
        	</center>

        </div>

        <div className="sponsored">
        
        	<center>
        		<div className="row">
				  
				  <div className="col-md-6">
				  	<a href="http://futurism.com/" target="_blank"><img src="http://futurism.com/wp-content/themes/futurism/images/facebook.png" className="img-responsive" alt="Responsive image" id="futurism"/></a>
				  	 	<center>
			        		<h1><strong>Futurism</strong></h1>
			        		<h3><em>Building the Future together</em></h3>
			        	</center>
				  </div>

				  <div className="col-md-6">
				  	<a href="http://cnn.com/" target="_blank"><img src="http://xs10.swackett.com/s2/wp-content/uploads/cnn-tech.jpg" className="img-responsive" alt="Responsive image" id="futurism"/></a>
				  		<center>
			        		<h1><strong>CNN Tech</strong></h1>
			        		<h3><em>The latest in International Tech innovation</em></h3>
			        	</center>
				  </div>

				</div>
        	</center>

        	</div>

        </div>	

      </div>
    )
  }
})

export default Home;