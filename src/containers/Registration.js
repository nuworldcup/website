import React, { Component } from 'react';
import SplitPageOptions from '../components/RegistrationComponents/SplitPageOptions/SplitPageOptions';
import IndividualOrTeam from '../components/RegistrationComponents/IndividualOrTeam/IndividualOrTeam';
import FadeInText from '../components/FadeInText/FadeInText';
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

    renderWomensOption() {
        return(
            <FadeInText text={"Womens World Cup"} />
        )
    }

    renderCoedOption() {
        return(
            <FadeInText text={"Coed World Cup"} />
        )
    }

    render() {
        // get request to backend to see if registration is open
		return (
            <div className="registration">
                <SplitPageOptions 
                    renderInactiveComponentOne={this.renderWomensOption}
                    renderActiveComponentOne={this.renderIndividualOrTeam} 
                    renderInactiveComponentTwo={this.renderCoedOption}
                    renderActiveComponentTwo={this.renderIndividualOrTeam} 
                />
            </div>
		);
	}
}


export default Registration;