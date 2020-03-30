import React, { Component } from 'react'
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import Footer from './Footer'
import logo from '../assets/img/transparentnuwclogo.png'
import gonzo from '../assets/img/gonzo/gonzo-w.jpg'
import grouppic from '../assets/img/grouppic.jpeg';
import '../homepage.css'


class Homepage extends Component {
  render() {
    return (
        <div>
          <div class="page-wrap panel1">  
            <section class="main-content" role="main">
                <img class='home-logo center' src={logo}></img>
            </section>
            <section class="main-content" role="complementary">
              <p class="lead">NU World Cup aims to bring people together through a common passion for soccer, 
              and runs the largest student-run athletic event at Northwestern: 
              a 500+ participant soccer tournament in the spring. </p>
            </section>
          </div>
          <div class="page-wrap panel2">  
            <section class="main-content" role="main">
              <p class="lead">We run a variety of events every year, including tournaments 
              (futsal, FIFA, halloween-themed), cultural events, freestyler shows, and trips to Chicago Fire games. </p>
            </section>
            <section class="main-content" role="complementary">
              Sidebar
            </section>
          </div>
          <div class="page-wrap panel3">  
            <section class="main-content" role="main">
                <img class='home-logo center' src={gonzo}></img>
            </section>
            <section class="main-content" role="complementary">
              <p class="lead">We're also very proud of our affiliation
               with Gonzo Soccer: a Chicago non profit that empowers young girls through the beautiful game. World Cup partners
                with Gonzo to provide the girls academic mentorship. Check them out <a href="https://www.facebook.com/GONZOsoccer/">here</a>!
              </p>          
            </section>
          </div>
          <div class="page-wrap panel4">  
            <section class="main-content" role="main">
              <p class="lead">World Cup recruits freshmen, sophomores, juniors, and seniors
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
                <img class='home-logo center' src={logo}></img>
            </section>
            <section class="main-content" role="complementary">
              <p class="lead">We're blessed to have partnered with a number of great companies in the last few years. World Cup
              wouldn't be the same without our sponsors. </p>
            </section>
          </div>
        </div>
    )
  }
}

export default Homepage;
