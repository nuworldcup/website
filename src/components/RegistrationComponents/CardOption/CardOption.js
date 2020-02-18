import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './CardOption.css';

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
                <div className="card w-75 center-card" onClick={this.props.onClick}>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default CardOption;