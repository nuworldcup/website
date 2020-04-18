import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// fix the calendar part on the nav and make it point to the calendar component

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-static-top navbar-expand-lg navbar-dark" color='dark-grey' role="navigation">
				<div className="container">
					<Link className="navbar-brand" to={'/'}>
						NU World Cup
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" 
					aria-controls="#navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarToggler">
						<ul className="navbar-nav mr-auto spooky-text">
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to={'/calendar'}> Calendar </Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/gallery'}> Gallery </Link>
							</li>
							{/*<li className="nav-item">
								<Link className="nav-link" to={'/contact'}> Contact </Link>
							</li>*/}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;