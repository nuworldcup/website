import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
		return (
			<nav className="navbar navbar-static-top navbar-expand-lg navbar-dark" role="navigation">
				<div className="container">
					<Link className="navbar-brand" to={'/'}>
						NU World Cup 2019
					</Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="#navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarToggler">
						<ul className="navbar-nav mr-auto">
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="https://docs.google.com/forms/d/13aTB9dyjttfU8Gg75MddyTzrX9Bin9tByaqDYoKmzC4/viewform?ts=5cc37e31&edit_requested=true&fbclid=IwAR2f2hbRmOlc6lChTVaq6-ehdogZgKBUVZt3PbpE0EWkrMtaZY4Jrg0teJA"> Chicago Fire Tickets </a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/FAQ'}> FAQ </Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to={'/gonzo'}> Gonzo Soccer </Link>
							</li>
							 <li className="nav-item">
							 	<Link className="nav-link" to={'/sponsors'}> Sponsors </Link>
							 </li>
						</ul>
					</div>
				</div>
            </nav>
	    );
	}
}

export default Navbar;


// <li className="nav-item">
// 	<a className="nav-link" href="about-us"> About Us </a>
// </li>
// <li className="nav-item">
// 	<a className="nav-link" href="/gallery"> Gallery </a>
// </li>
// <li className="nav-item">
// 	<a className="nav-link" href="/contact-us"> Contact Us </a>
// </li>















