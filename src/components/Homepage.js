import React, { Component } from 'react'
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import logo from '../assets/img/transparentnuwclogo.png'
import gonzo from '../assets/img/gonzo/gonzo-w.jpg'
import grouppic from '../assets/img/grouppic.jpeg';
import futsal from '../assets/img/futsal-tourney/nuwcwinterfutsal-square.png'
import mexico from '../assets/img/nuwcmxwhite.png'
import nigeria from '../assets/img/nigerialogo.png'
import italy from '../assets/img/past-logos/italylogo.png'
import subway from '../assets/img/sponsors/2016/subway.jpg'
import kind from '../assets/img/sponsors/2016/kind.jpg'
import monster from '../assets/img/sponsors/2016/monster.jpg'
import redstars from '../assets/img/sponsors/2019/redstars.png'
import president from '../assets/img/sponsors/2018/president.png'
import loop from '../assets/img/sponsors/2018/loop.png'
import { Link as Animationlink } from 'react-scroll';


import fire from '../assets/img/sponsors/old/chicagofire.png'
import downarrow from '../assets/img/downarrow.png'

import '../homepage.css'


class Homepage extends Component {
  render() {
    return (
      <div>
        {/*<p className='d-flex mainstatement'> Amidst the current struggles faced by the Black community in terms of police brutality and continued systemic racism in America, NU World Cup pledges to continue standing by the Black Lives Matter movement and what it represents. The club has held diversity as a central tenet since its inception within the International Students’ Association. This mission has continued to be of supreme importance, especially in a time where we can use our privilege   to support those members of our society that are fighting for equality. The club has always held empowerment of marginalized groups to be central to our mission, and through our work with Gonzo soccer and organizations like it, we have worked to empower women in what ways we can. This desire to embolden those groups is, of course, highlighted in this time of such a powerful push for long-needed reform. The community within NU World Cup is one that is inclusive, understanding, and aware of the outcry for change and representation, and we wish to extend ourselves to the greatest extent possible.
	      We pledge to maintain continuous dialogue within the club about these difficult issues, provide members with resources for education from perspectives they may not have had access to, and we will welcome individuals and educators that are directly involved in the movement for seminar-style conversations about our role as allies to this powerful campaign for change. Ultimately, this is not simply a struggle for one group but one that we face as both a country and a global community. NU World Cup has always embodied a sense of unity across nationalities, ethnicities and creeds. We will continue to strive to create this inclusive culture and promote a dialogue conducive to progress and we will continue to do so in the face of adversity.
        </p>*/}
        <div className='d-flex justify-content-center home-logo-div'>
          <img
            className='home-logo'
            src={logo}
            alt={'Northwestern World Cup 2019'} />
        </div>
        <div className='d-flex justify-content-center'>
          <p className='lead'> Community. Philanthropy. Soccer.</p>
        </div>
        <div className='d-flex justify-content-center'>
          <p className='lead'>
            <Animationlink to="scrolltarget" smooth={true} duration={500}>
              <img className="downarrow" src={downarrow} alt="Down arrow" />
            </Animationlink>
          </p>
        </div>
        <div className="flex-container panel2" name="scrolltarget">
          <div className="container">
            <p className="lead homepagetext" >We run a variety of events every year, including tournaments
              (futsal, FIFA, halloween-themed), cultural events, freestyler shows, and trips to Chicago Fire games. </p>
          </div>
          <div className="container">
            <div id="carouselExampleControls" className="carousel slide carousel-center" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="w-100 carouselimg" src={nigeria} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="w-100 carouselimg" src={futsal} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="w-100 carouselimg" src={mexico} alt="Third slide" />
                </div>
                <div className="carousel-item">
                  <img className="w-100 carouselimg" src={italy} alt="Fourth slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        {/*<div className="flex-container">
          <div className="container">
            <img className='home-logo center gonzoimage' alt='gonzo' src={gonzo}></img>
          </div>
          <div className="container">
            <p className="lead homepagetext">We're also very proud of our affiliation
            with Gonzo Soccer: a Chicago non profit that empowers young girls through the beautiful game. World Cup partners
            with Gonzo to provide the girls academic mentorship. Check them out <a href="https://www.facebook.com/GONZOsoccer/">here</a>!
            </p>
          </div>
        </div>*/}
        <div className="flex-container panel4">
          <div className="container containerhomepg">
            <p className="lead homepagetext">World Cup recruits freshmen, sophomores, juniors, and seniors
            every year in the fall. To get in touch, email us at northwesternworldcup@gmail.com,
            or reach out to one of our exec board through the contact tab!
            </p>
          </div>
          <div className="container containerhomepg">
            <img className='home-logo center gonzoimage' alt='group' src={grouppic}></img>
          </div>
        </div>
        <div className="flex-container panel1">
          <div className="container">
            <img className="sponsorimg" src={subway} alt="Subway"></img>
            <img className="sponsorimg" src={fire} alt = "Chicago Fire"></img>
            <img className="sponsorimg" src={kind} alt="Kind"></img>
            <img className="sponsorimg" src={monster} alt="Monster"></img>
            <img className="sponsorimg" src={redstars} alt="Chicago Red Stars"></img>
            <img className="sponsorimg" src={loop} alt="Loop"></img>
            <img className="sponsorbottomimg" src={president} alt="Office of the President"></img>
          </div>
          <div className="container">
            <p className="lead homepagetext">We're blessed to have partnered with a number of great companies in the last few years. World Cup
            wouldn't be the same without our sponsors.
            </p>
          </div>
        </div>
      </div >
    )
  }
}

export default Homepage;
