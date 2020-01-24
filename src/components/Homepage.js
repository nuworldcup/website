import React, { Component } from 'react'
// import logo from '../assets/img/nuwclogo.jpg';
// import logomx from '../assets/img/nuwcmxwhite.png';
// import wickedlogo from '../assets/img/wicked-cup/wickedcupbackground.jpg';
// import winterfs from '../assets/img/futsal-tourney/nuwcwinterfutsal.png';
import Footer from './Footer'
import logo from '../assets/img/nuwclogo.jpg'
import fifa from '../assets/img/Fifa-Tourney-Banner.jpg'
import futsal from '../assets/img/futsal-tourney/nuwcwinterfutsal.png'

class Homepage extends Component {
  render() {
    return (

      <div background-color='white'>
        <div className='d-flex justify-content-center home-logo-div'>
          <img
            class='home-logo'
            src={futsal}
            alt={'Northwestern World Cup 2019'}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <p className='lead'> Community. Philanthropy. Soccer.</p>
        </div>
        <div>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrgCt121Wujo4PNwBdMKI5ZFvzJQ0Y3lUEjkvRJe_X4GO5vw/viewform?embedded=true" width="640" height="1080" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
        <div>


        </div>
        <Footer />
      </div >

    )
  }
}

export default Homepage
