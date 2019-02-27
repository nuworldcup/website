import React, { Component } from 'react';

class PageTitle extends Component {
	// takes optional prop small that should be true or false to indicate whether it should be a small title
	
	constructor(props) {
		super(props);
		this.getClassName = this.getClassName.bind(this);
	}

	getClassName(small) {
		if (small) {
			return "small-title";
		} else {
			return "title"
		}
	}

    render() {
		return (
			<div className="d-flex justify-content-center title-div">
                <img className={this.getClassName(this.props.small)} src={this.props.image} alt={this.props.alternate}/> 
            </div>

	    );
	}
}

export default PageTitle;