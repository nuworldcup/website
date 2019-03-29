import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import img from '../../assets/img/gallery/pic1.jpg';

class LoadingImage extends Component {
    render() {
		return (
			<div>
				<ReactCSSTransitionGroup
                    transitionName="loadingItem"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <img className="feed__loading-item" src={img} />
                </ReactCSSTransitionGroup>
			</div>

	    );
	}
}

export default LoadingImage;