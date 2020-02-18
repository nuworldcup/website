import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './FadeInText.css';

class FadeInText extends React.Component {
    render() {
          return (
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeaveTimeout={500}
                >
                    <h1 className={"center"}>{this.props.text}</h1>
                </ReactCSSTransitionGroup>
        );
    }
}

export default FadeInText;