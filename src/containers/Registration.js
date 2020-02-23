import React, { Component } from 'react';
import SplitPageOptions from '../components/RegistrationComponents/SplitPageOptions/SplitPageOptions';
import CardOption from '../components/RegistrationComponents/CardOption/CardOption';
import FadeInText from '../components/FadeInText/FadeInText';
import { User, Users } from 'react-feather';
import './Registration.css';


class Registration extends Component {

    constructor(props) {
        super(props);
        this.renderUser = this.renderUser.bind(this);
        this.renderUsers = this.renderUsers.bind(this);
        this.renderIndividualOrTeam = this.renderIndividualOrTeam.bind(this);
        this.renderWomensOption = this.renderWomensOption.bind(this);
        this.renderCoedOption = this.renderCoedOption.bind(this);
        this.onBack = this.onBack.bind(this);
        this.state = {
            tournamentType: "",
            regType: "",
        }
    }

    renderUser() {
        return(
            <User className={"align-icon"}/>
        );
    }

    renderUsers() {
        return(
            <Users className={"align-icon"}/>
        );
    }

    renderIndividualOrTeam() {
        if (this.state.regType == "individual") {
            return(<div className="options-container">Individual Reg</div>);
        } else if (this.state.regType == "team") {
            return(<div className="options-container">Team Reg</div>);
        }

        return(
            <div className="options-container">
                <CardOption 
                    icon={this.renderUser}
                    title={"Individual"} 
                    description={"Register as an individual! We typically try to add inviduals onto teams that are short players or teams that have told us they'd be willing to take someone new : )"}
                    onClick={() => {this.setState({regType: "individual"})}}
                />
                <div className={"top-space"}>
                    <CardOption 
                        icon={this.renderUsers}
                        title={"Team"} 
                        description={"Register a team of 8 or more players!"}
                        onClick={() => {this.setState({regType: "team"})}}
                    />
                </div>
            </div>
        );
    }

    renderIndividualRegistration() {

    }

    renderTeamRegistration() {

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

    onBack() {
        if (this.state.regType !== "") {
            this.setState({regType: ""})
            return false;
        } else {
            this.setState({tournamentType: ""})
            return true;
        }
    }

    // Flow is splitpage -> individual or team -> registration and submit

    render() {
        // get request to backend to see if registration is open
		return (
            <div className="registration">
                <SplitPageOptions
                    renderInactiveOne={this.renderWomensOption}
                    renderActiveOne={this.renderIndividualOrTeam} 
                    onRenderActiveOne={() => {
                        this.setState({tournamentType: "womens"})
                    }}
                    onOneBack={this.onBack}
                    renderInactiveTwo={this.renderCoedOption}
                    renderActiveTwo={this.renderIndividualOrTeam}
                    onRenderActiveTwo={() => {
                        this.setState({tournamentType: "coed"})
                    }}
                    onTwoBack={this.onBack}
                />
            </div>
		);
	}
}


export default Registration;