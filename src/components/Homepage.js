import React, { Component } from 'react';
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import nigeria from '../assets/img/nuwcfire.png';

class Homepage extends Component {
    render() {
		return (
			<div> 
				<div className="d-flex justify-content-center home-logo-div">
					<img className="home-logo" src={nigeria} alt={"Northwestern World Cup 2019"}/>
				</div>
				<div className="d-flex justify-content-center">
					<a className="register-here" href="https://docs.google.com/forms/d/13aTB9dyjttfU8Gg75MddyTzrX9Bin9tByaqDYoKmzC4/viewform?ts=5cc37e31&edit_requested=true&fbclid=IwAR2f2hbRmOlc6lChTVaq6-ehdogZgKBUVZt3PbpE0EWkrMtaZY4Jrg0teJA" > Get Chicago Fire Tickets! </a>
				</div>
			</div>
			);
	}
}

export default Homepage;

// <div className="d-flex justify-content-center wicked-background-div">
// 	<img className="wicked-background" src={wickedlogo} alt={"Wicked Cup 2018"}/>
// </div>