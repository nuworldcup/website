import React, {Component, Fragment} from 'react';
import CardOption from '../CardOption/CardOption';
import { User, Users } from 'react-feather';
import './IndividualOrTeam.css';

class IndividualOrTeam extends React.Component {

    constructor(props) {
        super(props);
        this.renderUser = this.renderUser.bind(this);
        this.renderUsers = this.renderUsers.bind(this);
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

    render() {
        return(
            <div className="options-container">
                <CardOption 
                    icon={this.renderUser}
                    title={"Individual"} 
                    description={"Register as an individual! We typically try to add inviduals onto teams that are short players or teams that have told us they'd be willing to take someone new : )"}
                    onClick={() => {console.log("individual clicked")}}
                />
                <div className={"top-space"}>
                    <CardOption 
                        icon={this.renderUsers}
                        title={"Team"} 
                        description={"Register a team of 8 or more players!"}
                        onClick={() => {console.log("team clicked")}}
                    />
                </div>
                
            </div>
        );
    }
}

export default IndividualOrTeam;