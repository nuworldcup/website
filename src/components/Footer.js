import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer>
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <p className="feedbacktext">Got Feedback? Click
                            <a href="https://forms.gle/SuMZUtWkcYf41nqN8" target="_blank" rel="noopener noreferrer"> Here</a></p>
                        </div>
                        <div className="col-lg-6">
                            <p className="footertext">Copyright &copy; NU World Cup 2020</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
