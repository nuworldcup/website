import React, { Component } from 'react';
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import nigeria from '../assets/img/nigerialogo.png';

class Homepage extends Component {
    render() {
		return (
			<div> 
				<div className="d-flex justify-content-center home-logo-div">
					<img className="home-logo" src={nigeria} alt={"Northwestern World Cup 2019"}/>
				</div>
				<div className="d-flex justify-content-center">
					<a className="register-here" href="https://docs.google.com/forms/d/e/1FAIpQLSdxveGnwLBgFJACCON0JG8T2VRE0OG6TuB90BA0RAmq1wt2Qw/viewform" > Register Here! </a>
				</div>
			</div>
			);
	}
}

export default Homepage;

// <div className="d-flex justify-content-center wicked-background-div">
// 	<img className="wicked-background" src={wickedlogo} alt={"Wicked Cup 2018"}/>
// </div>