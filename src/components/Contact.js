import React, { Component } from 'react';
import '../contact.css'
import pres from '../assets/img/spencer.jpg'
import vp from '../assets/img/carson.JPG'
import sec from '../assets/img/chase.jpg'

//import grouppic from '../assets/img/grouppic.jpeg';

class Contact extends Component {
	render() {
		return (
			<div>

				<div className="container">
					<div class='page-wrap'>
						<section class='contact-content'>
							<h1>President</h1>
							<img src={pres} class = 'profilepic' alt = "Spencer Camp"/>
							<p>Spencer Camp
							<small> SpencerCamp2022@u.northwestern.edu</small></p>
						</section>
						<section class='contact-content'>
							<h1>Vice President</h1>
							<img src={vp} class = 'profilepic' alt = "Carson Burton"/>
							<p>Carson Burton
							<small> CarsonBurton2023@u.northwestern.edu</small></p>
						</section>
						<section class='contact-content'>
							<h1>Treasurer</h1>
							<img src={sec} class = 'profilepic' alt = "Chase Moralejo"/>
							<p>Chase Moralejo
							<small> ChaseMoralejo2022@u.northwestern.edu</small></p>
						</section>
						<br /> <br />
					</div>


				</div><br /> <br /> <br /> <br />
			</div>
		);
	}
}

export default Contact;
