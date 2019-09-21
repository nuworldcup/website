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
	    			<p className="lead"> NU World Cup aims to spread the love of soccer across Northwestern's campus.</p>
    			</div>
			</div>

		);
	}
}


export default About;