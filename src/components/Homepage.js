import React, { Component } from 'react'
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import Footer from './Footer'
import logo from '../assets/img/nuwclogo.jpg'
import nigeria from '../assets/img/nigerialogo.png'
import futsal from '../assets/img/futsal-tourney/nuwcwinterfutsal.png'
import mexico from '../assets/img/nuwcmxalt.png'
import pic1 from '../assets/img/gallery/pic1.jpg'
import pic2 from '../assets/img/gallery/pic2.jpg'
import pic3 from '../assets/img/gallery/pic3.jpg'
import gonzo from '../assets/img/gonzo/gonzo.jpg'

class Homepage extends Component {
  render() {
    return (
      <div>
        <div background-color='white'>

          <div>
            <img class='home-logo center'
              src={logo}>
            </img>
          </div>

          <div class='homepage-container'>

            <div class='grid-cell-2'>
              <div id='carouselcontrols' class='carousel slide center' data-ride='carousel'>
                <div class='carousel-inner'>
                  <div class='carousel-item active'>
                    <img class='d-block' src={pic1} alt='First slide' /></div>
                  <div class='carousel-item'>
                    <img class='d-block ' src={pic2} alt='Second slide' />
                  </div>
                  <div class='carousel-item'>
                    <img class='d-block' src={pic3} alt='Third slide' />
                  </div>
                </div>
                <a class='carousel-control-prev' href='#carouselcontrols' role='button' data-slide='prev'>
                  <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                  <span class='sr-only'>Previous</span>
                </a>
                <a class='carousel-control-next' href='#carouselcontrols' role='button' data-slide='next'>
                  <span class='carousel-control-next-icon' aria-hidden='true'></span>
                  <span class='sr-only'>Next</span>
                </a>
              </div>
            </div>

            <div class='grid-cell-25'>
              <h1>About Us</h1>
            </div>

            <div class='grid-cell-35'>
              <h1>Past Events</h1>
            </div>

            <div class='grid-cell-3'>
              <div id='carouselcontrol' class='carousel slide center' data-ride='carousel'>
                <div class='carousel-inner'>
                  <div class='carousel-item active'>
                    <img class='d-block ' src={futsal} alt='First slide' /></div>
                  <div class='carousel-item'>
                    <img class='d-block ' src={nigeria} alt='Second slide' />
                  </div>
                  <div class='carousel-item'>
                    <img class='d-block ' src={mexico} alt='Third slide' />
                  </div>
                </div>
                <a class='carousel-control-prev' href='#carouselcontrol' role='button' data-slide='prev'>
                  <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                  <span class='sr-only'>Previous</span>
                </a>
                <a class='carousel-control-next' href='#carouselcontrol' role='button' data-slide='next'>
                  <span class='carousel-control-next-icon' aria-hidden='true'></span>
                  <span class='sr-only'>Next</span>
                </a>
              </div>
            </div>

            <div class='grid-cell-1'>
              <h1 class='home-content'>What is Gonzo?</h1>
              <p>A non-profit that uses soccer to empower girls in order to achieve their potential</p>
            </div>
            <div class='grid-cell-1'>
              <img src={gonzo}></img>
            </div>
          </div>
        </div>

        <Footer />
      </div >

    )
  }
}

export default Homepage
