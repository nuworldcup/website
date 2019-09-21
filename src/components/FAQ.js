import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import title from '../assets/img/titles/faq-title.png';
import map from '../assets/img/map.png';

class FAQ extends Component {
    render() {

	   	var cardStyle = {
	  		boxShadow: '0 1px 1px rgba(0,0,0,.05)',
	  		border: '1px solid transparent',
	  		borderRadius: '4px',
	  		borderColor: '#ddd',
	  		boxSizing: 'border-box',
	  		marginTop: '5px',
	  		wordWrap: 'break-word'
		};

		var cardResponsive = {
  			flex: '1 1 auto',
  			wordWrap: 'break-word',
  			flexDirection: 'column',
  			display: 'flex',
  			position: 'relative',
  			whiteSpace: 'normal'
		};

		var twoBodies = {
	  		borderBottom: '1px solid',
	  		borderColor: '#ddd'
		}; 

		return (
			<div>
        		<div className="d-flex justify-content-center title-div">
            		<img className="title" src={title} alt={"FAQ"}/> 
        		</div>

				<div className="container">
					
					<div id="accordion">



						<div className="faqHeader">Joining World Cup </div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingOne" data-parent="#accordion" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								<div >
									How can I join World Cup?
								</div>
							</div>
							<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
								<div className="card-body">
									World Cup recruits in early Fall, check back at the 'Join Us' tab for updates on when that will be!
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
								What is the application process like?
							</div>
							<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
								<div className="card-body" style={twoBodies}>
									The first step for you is an online application that comes out here on the website. Every candidate will then be invited to an interview session, following which we'll let you know if you're in!
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
								Do I need to be a freshman or a sophomore to join?
							</div>
							<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								<div className="card-body">
									Nah, we don't age discriminate at World Cup ;)
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
								Do I need to like or be good at soccer to join?
							</div>
							<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
								<div className="card-body">
									Nope! While what we do is directly related to the beautiful game, some of our happiest and most active members can't kick a ball to save their lives.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
								What is being a board member like?
							</div>
							<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
								<div className="card-body">
									Board members are sorted into one of our committees (marketing, sponsorship, community outreach, events & programming, games & logistics, external relations, tech), and will spend time working on committee-specific as well as general club tasks.
								</div>
							</div>
						</div>

						<div className="card" style={cardStyle}>
							<div className="card-header btn btn-light text-left" style={cardResponsive} id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
								How much of a time commitment is World Cup?
							</div>
							<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
								<div className="card-body">
									World Cup has weekly, hour-long general meetings. You'll also be expected to contribute to what your committee and the club are doing in general. You get what you put into it, and World Cup has been known to be as much of a time commitment as you want it to be.
								</div>
							</div>
						</div>


					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default FAQ;