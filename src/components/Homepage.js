import React, { Component } from 'react'
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import Footer from './Footer'
import logo from '../assets/img/transparentnuwclogo.png'
import fifa from '../assets/img/Fifa-Tourney-Banner.jpg'
import futsal from '../assets/img/futsal-tourney/nuwcwinterfutsal.png'

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className='d-flex justify-content-center home-logo-div'>
          <img
            class='home-logo'
            src={logo}
            alt={'Northwestern World Cup 2019'}/>
        </div>
        <div className='d-flex justify-content-center'>
          <p className='lead'> Community. Philanthropy. Soccer.</p>
        </div>
      </div >

    )
  }
}

export default Homepage;
