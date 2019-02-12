import React, { Component } from 'react';
// import logo from '../assets/img/nuwclogo.jpg';
import logomx from '../assets/img/nuwcmxwhite.png';
import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';

class Homepage extends Component {
    render() {
		return (
			<div className="d-flex justify-content-center home-logo-div">
				<img className="home-logo" src={winterfs} alt={"Northwestern World Cup 2019"}/>
			</div>
	    );
	}
}

export default Homepage;

// <div className="d-flex justify-content-center wicked-background-div">
// 	<img className="wicked-background" src={wickedlogo} alt={"Wicked Cup 2018"}/>
// </div>