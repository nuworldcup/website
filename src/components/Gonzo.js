import React, { Component } from 'react';
import title from '../assets/img/titles/gonzo-title.png';
import infographic from '../assets/img/gonzo/gonzo-infograph-short.png';

class Gonzo extends Component {
    render() {
		return (
			<div>
				<div className="d-flex justify-content-center title-div">
            		<img className="title" src={title} alt={"GONZO"}/> 
        		</div>

        		<div className="d-flex justify-content-center infographic-div">
            		<img className="infographic" src={infographic} alt={"Infographic"}/> 
        		</div>

				<div className="d-flex justify-content-center">
            		<p className="lead"> Check them out <a href="http://www.gonzosoccer.org/en/">here! </a></p>
        		</div>

			</div>
	    );
	}
}

export default Gonzo;