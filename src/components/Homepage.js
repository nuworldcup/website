import React, { Component } from "react";
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import logo from "../assets/img/nuwclogo.jpg";

class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <a
            href="https://www.facebook.com/events/595818960951941"
            className="d-flex justify-content-center home-logo-div"
          >
            <img
              className="home-logo"
              src={logo}
              alt={"Northwestern World Cup 2019"}
            />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <p className="lead">
            {" "}
            Join us in our support of NU Women's Soccer this Friday! Click on
            our logo for the Facebook Event.
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;

// <div className="d-flex justify-content-center wicked-background-div">
// 	<img className="wicked-background" src={wickedlogo} alt={"Wicked Cup 2018"}/>
// </div>
