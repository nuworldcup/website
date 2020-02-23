import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './CardOption.css';

import { User, Users } from 'react-feather';

class CardOption extends React.Component {

    render() {
        return(
            <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeaveTimeout={500}
                >
                <div className="card w-75 center-card card-style" onClick={this.props.onClick}>  
                    <div className="card-body">
                        <div className="icon-text-block">
                            {this.props.icon()}
                            <h4 className="card-title center-text-with-icon">
                                {this.props.title}
                            </h4>
                        </div>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default CardOption;