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
							<p>Vikram Manikantan</p>
							<p><small>VikramManikantan2022@u.northwestern.edu</small></p>
						</section>
						<section class='contact-content'>
							<h1>Vice President</h1>
							<img src='...' alt='placeholder' />
							<p>Alvaro Matos</p>
							<p><small>alvaromatos2021@u.northwestern.edu</small></p>
						</section>
						<section class='contact-content'>
							<h1>Treasurer</h1>
							<img src='...' alt='placeholder' />
							<p>Brandon Kyung</p>
							<p><small>brandonkyung2022@u.northwestern.edu</small></p>
						</section>
						<br /> <br />
					</div>


				</div><br /> <br /> <br /> <br />
			</div>
		);
	}
}

export default Contact;
