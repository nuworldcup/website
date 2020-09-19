import React, { Component } from 'react';
import grouppic from '../assets/img/grouppic.jpeg';
import '../contact.css'
import prez from '../assets/img/vikram.jpg'

class Contact extends Component {
	render() {
		return (
			<div>

				<div className="container">
					<div class='page-wrap'>
						<section class='contact-content'>
							<h1>President</h1>
							<img src={prez} alt='placeholder' />
							<p>Vikram Manikantan
							<small> VikramManikantan2022@u.northwestern.edu</small></p>
						</section>
						<section class='contact-content'>
							<h1>Vice President</h1>
							<img src='...' alt='placeholder' />
							<p>Alvaro Matos
							<small> alvaromatos2021@u.northwestern.edu</small></p>
						</section>
						<section class='contact-content'>
							<h1>Treasurer</h1>
							<img src='...' alt='placeholder' />
							<p>Brandon Kyung
							<small> brandonkyung2022@u.northwestern.edu</small></p>
						</section>
						<br /> <br />
					</div>


				</div><br /> <br /> <br /> <br />
			</div>
		);
	}
}

export default Contact;
