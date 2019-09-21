import React, { Component } from 'react';
import grouppic from '../assets/img/grouppic.jpeg';

class Contact extends Component {
    render() {
		return (
			<div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead toptitle"> Applications will be out soon on this page, stay tuned!</p>
    			</div>    			
    			<div className="row justify-content-center">
		                <img className="contactimg" src={grouppic} alt="" />
		        </div>
				<div className="d-flex justify-content-center">
					<p className="lead"> Questions? Email northwesternworldcup@gmail.com </p>
				</div>
			</div>
	    );
	}
}

export default Contact;