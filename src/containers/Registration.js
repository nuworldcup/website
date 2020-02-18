import React, { Component } from 'react';
import SplitPageOptions from '../components/RegistrationComponents/SplitPageOptions/SplitPageOptions';
import IndividualOrTeam from '../components/RegistrationComponents/IndividualOrTeam/IndividualOrTeam';
import './Registration.css';


class Registration extends Component {

    constructor(props) {
        super(props);
        this.renderIndividualOrTeam = this.renderIndividualOrTeam.bind(this);
    }


    renderIndividualOrTeam() {
        return(
            <IndividualOrTeam />
        )
    }

    render() {
        // get request to backend to see if registration is open
		return (
            <div className="registration">
                <SplitPageOptions option1Component={this.renderIndividualOrTeam} option2Component={this.renderIndividualOrTeam} />
            </div>
		);
	}
}


export default Registration;