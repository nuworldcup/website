import React, { Component } from 'react';
import grouppic from '../assets/img/grouppic.jpeg';

class Contact extends Component {
    render() {
		return (
			<div className="container">
				<br /> <br />
	    		<div className="d-flex justify-content-center">
	    			<p className="lead toptitle"> Applications for new members will be out on this page soon, stay tuned!</p>
    			</div>    			
    			<div className="row justify-content-center">
		                <img className="contactimg" src={grouppic} alt="" />
		        </div><br />
				<div className="d-flex justify-content-center">
					<p className="lead justify-content-center"> Questions? Email us at northwesternworldcup@gmail.com </p>
				</div><br /> <br /> <br /> <br />
			</div>
	    );
	}
}

export default Contact;