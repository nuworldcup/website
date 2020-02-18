import React, {Component, Fragment} from 'react';
import CardOption from '../CardOption/CardOption';
import './IndividualOrTeam.css';

class IndividualOrTeam extends React.Component {
    render() {
        return(
            <div className="options-container">
                <CardOption 
                    title={"Individual"} 
                    description={"Register as an individual! We typically try to add inviduals onto teams that are short players or teams that have told us they'd be willing to take someone new : )"}
                    onClick={() => {console.log("individual clicked")}}
                />
                <div className={"top-space"}>
                    <CardOption 
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