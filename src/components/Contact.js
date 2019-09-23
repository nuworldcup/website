import React, { Component } from 'react';
import grouppic from '../assets/img/grouppic.jpeg';

class Contact extends Component {
    render() {
		return (
			<div className="container">
	    		<div className="d-flex justify-content-center">
	    			<p className="lead toptitle"> Applications for new members will be out on this page soon, stay tuned!</p>
    			</div>    			
    			<div className="row justify-content-center">
		                <img className="contactimg" src={grouppic} alt="" />
		        </div>
				<div className="d-flex justify-content-center">
					<p className="lead"> Questions? Email us at northwesternworldcup@gmail.com </p>
				</div>
			</div>
	    );
	}
}

export default Contact;