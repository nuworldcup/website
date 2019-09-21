import React, { Component } from 'react';
import title from '../assets/img/titles/about-title.png';



class About extends Component {
    render() {
		return (
			<div>
				<div className="d-flex justify-content-center title-div">
            		<img className="title" src={title} alt={"ABOUT"}/> 
        		</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead toptitle"> NU World Cup is the largest student-run soccer organization at Northwestern. </p>
    			</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead">We aim to bring people together through a common passion for the sport. </p>
    			</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead">Every year we host tournaments, cultural events, match day outings, and more! </p>
    			</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead">NU World Cup also works with with Gonzo Soccer: a Chicago non profit that empowers girls through soccer.</p>
    			</div>
			</div>

		);
	}
}


export default About;