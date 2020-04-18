import React, { Component } from 'react';
import grouppic from '../assets/img/grouppic.jpeg';
import '../contact.css'

class Contact extends Component {
	render() {
		return (
			<div>

				<div className="container">
					<div class='page-wrap'>
						<section class='contact-content'>
							<h1>President</h1>
							<img scr='...' alt='placeholder' />
							<p>grantelliot2020@u.northwestern.edu</p>
						</section>
						<section class='contact-content'>
							<h1>Vice President</h1>
							<img src='...' alt='placeholder' />
							<p>Sumer</p>
						</section>
						<section class='contact-content'>
							<h1>Treasurer</h1>
							<img src='...' alt='placeholder' />
							<p>Madison Hora</p>
						</section>
						<br /> <br />
					</div>


				</div><br /> <br /> <br /> <br />
			</div>
		);
	}
}

export default Contact;