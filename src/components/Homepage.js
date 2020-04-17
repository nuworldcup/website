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
import korjap from '../assets/img/past-logos/korea-japan-logo.png'
import subway from '../assets/img/sponsors/2016/subway.jpg'
import kind from '../assets/img/sponsors/2016/kind.jpg'
import monster from '../assets/img/sponsors/2016/monster.jpg'
import redstars from '../assets/img/sponsors/2019/redstars.png'
import president from '../assets/img/sponsors/2018/president.png'
import loop from '../assets/img/sponsors/2018/loop.png'


import fire from '../assets/img/sponsors/old/chicagofire.png'

import '../homepage.css'


class Homepage extends Component {
  render() {
    return (
      <div>
        <div class="topsection">
          <section>
            <img class='main-logo-div center' src={logo}></img>
          </section>
          <section>
            <h1 class='logo-text'> Community. Philanthropy. Soccer.</h1>
          </section>
        </div>
        <div class="page-wrap panel2" id="panel2">
          <section class="main-content" role="main">
            <p class="lead homepagetext">We run a variety of events every year, including tournaments
              (futsal, FIFA, halloween-themed), cultural events, freestyler shows, and trips to Chicago Fire games. </p>
          </section>
          <section class="main-content" role="complementary">
            <div id="carouselExampleControls" class="carousel slide carousel1-images carousel-center" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="w-100" src={nigeria} alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="w-100" src={futsal} alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="w-100" src={mexico} alt="Third slide" />
                </div>
                <div class="carousel-item">
                  <img class="w-100" src={korjap} alt="Fourth slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </section>
        </div>
        <div class="page-wrap panel3">
          <section class="main-content" role="main">
            <img class='home-logo center' src={gonzo}></img>
          </section>
          <section class="main-content" role="complementary">
            <p class="lead homepagetext">We're also very proud of our affiliation
            with Gonzo Soccer: a Chicago non profit that empowers young girls through the beautiful game. World Cup partners
                with Gonzo to provide the girls academic mentorship. Check them out <a href="https://www.facebook.com/GONZOsoccer/">here</a>!
              </p>
          </section>
        </div>
        <div class="page-wrap panel4">
          <section class="main-content" role="main">
            <p class="lead homepagetext">World Cup recruits freshmen, sophomores, juniors, and seniors
            every year in the fall. To get in touch, email us at northwesternworldcup@gmail.com,
            or reach out to one of our exec board through the contact tab!
              </p>
          </section>
          <section class="main-content" role="complementary">
            <img class='home-logo center' src={grouppic}></img>
          </section>
        </div>
        <div class="page-wrap panel1">
            <section class="main-content" role="main">
              <img class="sponsorimg" src={subway}></img>
              <img class="sponsorimg" src={fire}></img>
              <img class="sponsorimg" src={kind}></img>
              <img class="sponsorimg" src={monster}></img>
              <img class="sponsorimg" src={redstars}></img>
              <img class="sponsorimg" src={loop}></img>
              <img class="sponsorbottomimg" src={president}></img>
            </section>
            <section class="main-content" role="complementary">
              <p class="lead homepagetext">We're blessed to have partnered with a number of great companies in the last few years. World Cup
                wouldn't be the same without our sponsors. </p>
            </section>
        </div>
      </div>
    )
  }
}

export default Homepage;
