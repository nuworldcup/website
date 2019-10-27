import React, { Component } from 'react'
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import Footer from './Footer'
import logo from '../assets/img/wicked-cup/wickedcuplogo.png'

class Homepage extends Component {
  render() {
    return (
      <div className='black-background'>
        <div className='spooky-text'>
          <div className='d-flex justify-content-center home-logo-div'>
            <img
              class='home-logo'
              src={logo}
              alt={'Northwestern World Cup 2019'}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <a href='https://forms.gle/FwbBGxhgeXCdh1ei8' classname='form'>
              <p classname='lead'> Click here for Tournament Registration</p>
            </a>
          </div>
          <div className='d-flex justify-content-center'>
            <p className='lead'> Community. Philanthropy. Soccer. Occasional Spookiness.</p>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}

export default Homepage
