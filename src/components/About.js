import React, { Component } from 'react';
import title from '../assets/img/titles/about-title.png';

//import Footer from './Footer'


class About extends Component {
    render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-center title-div">
            		<img className="title" src={title} alt={"ABOUT"}/>
        		</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead toptitle"> NU World Cup aims to bring people together through a common passion for soccer, and runs the largest student-run athletic event at Northwestern: a 500+ participant soccer tournament in the spring.</p>
    			</div>
	    		<div className="d-flex ">
	    			<p className="lead"> We run a variety of events every year, including tournaments (futsal, FIFA, halloween-themed), cultural events, freestyler shows, and trips to Chicago Fire games. </p>
    			</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead"> We're also very proud of our affiliation with Gonzo Soccer: a Chicago non profit that empowers girls through the beautiful game. Check out the Gonzo tab to learn more about our partnership!</p>
    			</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead"> Keep updated with what we're up to during the year by following our <a href="https://www.facebook.com/nuworldcup/" target="_blank">Facebook</a> and <a href="https://www.instagram.com/nuworldcup/?hl=en" target="_blank"> Instagram</a> pages, as well as checking here periodically. </p>
    			</div>
	    		<div className="d-flex">
	    			<p className="lead"> Get in touch! Reach us at northwesternworldcup@gmail.com or text us at 847-644-5756.</p>
    			</div>
			</div>

		);
	}
}


export default About;
