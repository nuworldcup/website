import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon, MDBContainer } from 'mdbreact';
// fix the calendar part on the nav and make it point to the calendar component

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-static-top navbar-expand-lg navbar-dark" color='dark-grey' role="navigation">
				<div className="container">
					<div className="col-md-6">
						<Link className="navbar-brand" to={'/'}>
							NU World Cup
						</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
							aria-controls="#navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>

					<div className =  "col-md-4">
					<div className="collapse navbar-collapse" id="navbarToggler">
						<ul className="navbar-nav mr-auto spooky-text">
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to={'/turkey'}> Brackets </Link>
							</li>
							{/*}<li className="nav-item">
								<Link className="nav-link" to={'/registration'}> Registration </Link>
							</li>*/}
							<li className="nav-item">
								<Link className="nav-link" to={'/calendar'}> Calendar </Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/gallery'}> Gallery </Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/contact'}> Contact Us </Link>
							</li>
							{/*<li className="nav-item">
								<Link className="nav-link" to={'/contact'}> Contact </Link>
							</li>*/}
						</ul>
						</div>
					</div>
					<div className="col-md-2">
					<MDBContainer>
					<a href="https://www.facebook.com/nuworldcup" target = "_blank"  rel="noopener noreferrer" className= "fb-ic mr-3 fa-lg">
						<MDBIcon fab icon="facebook-f" />
					</a>
					<a href="https://www.instagram.com/nuworldcup/" target = "_blank"  rel="noopener noreferrer" className="ins-ic mr-3 fa-lg pink-text">
						<MDBIcon fab icon="instagram" />
					</a>
					<a href="mailto:northwesternworldup@gmail.com" className="email-ic mr-3 fa-lg white-text">
						<MDBIcon icon="envelope" />
					</a>
					</MDBContainer>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
