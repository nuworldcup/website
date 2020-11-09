import React from 'react';
import Footer from './Footer';
import wickedlogo from '../assets/img/wicked-cup/wickedcuplogosmall.png'

class Registration extends React.Component{
  render() {
  return(
    // <html>
    //   <body>
    //       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfP6wD0laJupTyQiQvylZtJDmQiTbCCp62alYO0m5Q7oK_rxg/viewform?embedded=true"
    //         width="640" height="861"
    //         frameborder="0"
    //         marginheight="0" marginwidth="0">
    //         Loading…
    //       </iframe>
    //   </body>
    // </html>
    <div>
      <div className='d-flex justify-content-center'>
        <img className='wicked-logo'
              src={wickedlogo}
              alt={'Wicked Cup 2020'} />
      </div>
      <div>
        <br></br><br></br>
        <h1 className='d-flex justify-content-center'>
          Registration coming soon!
        </h1>
        <br></br><br></br><br></br>
      </div>
    </div>
  )
  }
}

export default Registration;
