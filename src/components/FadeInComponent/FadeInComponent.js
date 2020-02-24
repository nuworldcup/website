import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './FadeInComponent.css';

class FadeInComponent extends React.Component {
    render() {
          return (
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeaveTimeout={500}
                >
                    {this.props.renderComponent()}
                </ReactCSSTransitionGroup>
        );
    }
}

export default FadeInComponent;