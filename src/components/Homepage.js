import React, { Component } from "react";
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import mainlogo from "../assets/img/nuwclogo.jpg";

class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <div className="d-flex justify-content-center home-logo-div">
          <img
            className="home-logo"
            src={mainlogo}
            alt={"Northwestern World Cup 2019"}
          />
        </div> */}
        <div className="d-flex justify-content-center">
          <p className="lead">Community. Philanthropy. Soccer. </p>
        </div>
        <div className="d-flex justify-content-center">
          <p classsname="reg-form">New Member Sign Ups Below</p>
        </div>
        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfXDLQOjzVcaS_YyOwa7PlqL01ldUmANcN0vYaqeKPujPztwA/viewform?embedded=true"
            width="640"
            height="2963"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
  }
}

export default Homepage;

// <div className="d-flex justify-content-center wicked-background-div">
// 	<img className="wicked-background" src={wickedlogo} alt={"Wicked Cup 2018"}/>
// </div>
