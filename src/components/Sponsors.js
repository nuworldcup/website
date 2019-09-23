import React, { Component } from 'react';
import Footer from './Footer';
import title from '../assets/img/titles/sponsors-title.png';
import womenscenter from '../assets/img/sponsors/2018/womens-center.png';
import president from '../assets/img/sponsors/2018/president.png';
import loop from '../assets/img/sponsors/2018/loop.png';
import pha from '../assets/img/sponsors/2018/pha.jpg';
import monster from '../assets/img/sponsors/2016/monster.jpg';
import musclemilk from '../assets/img/sponsors/old/musclemilk.jpg';
import qatar from '../assets/img/sponsors/old/qatar.jpg';
import subway from '../assets/img/sponsors/2016/subway.jpg';
import fire from '../assets/img/sponsors/old/chicagofire.png';
import redstars from '../assets/img/sponsors/2019/redstars.png';
import asa from '../assets/img/sponsors/2019/asa.png';
import kind from '../assets/img/sponsors/2016/kind.jpg';






class Sponsors extends Component {
    render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-center sponsor-title-div">
	        		<img className="sponsor-title" src={title} alt={"SPONSORS"}/> 
	    		</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead"> NU World Cup is made possible by generous contributions from our sponsors. Past sponsors include:</p>
    			</div>
		        <div className="row justify-content-center">

	            	<div className="img-portfolio">
		                <a target="_blank" href="https://loopnearby.com/">
		                    <img className="img-responsive img-hover sponsor" src={loop} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.monsterenergy.com/in/en">
		                    <img className="img-responsive img-hover sponsor" src={monster} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.northwestern.edu/president/">
		                    <img className="img-responsive img-hover sponsor" src={president} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://northwesternpha.com/">
		                    <img className="img-responsive img-hover sponsor" src={pha} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.musclemilk.com/">
		                    <img className="img-responsive img-hover sponsor" src={musclemilk} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.qatarairways.com/">
		                    <img className="img-responsive img-hover sponsor" src={qatar} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="http://www.northwestern.edu/womenscenter/">
		                    <img className="img-responsive img-hover sponsor" src={womenscenter} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio no-logo-div">
		                <a target="_blank" className="no-logo" href="https://www.internationalstudies.northwestern.edu/">
		  		            International Studies Program
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.subway.com/en-US">
		                    <img className="img-responsive img-hover sponsor" src={subway} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.chicago-fire.com/">
		                    <img className="img-responsive img-hover sponsor" src={fire} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="http://chicagoredstars.com/">
		                    <img className="img-responsive img-hover sponsor" src={redstars} alt="" />
		                </a>
		            </div>
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.facebook.com/ASANorthwestern/?ref=page_internal">
		                    <img className="img-responsive img-hover sponsor" src={asa} alt="" />
		                </a>
		            </div>	
	            	<div className="img-portfolio">
		                <a target="_blank" href="https://www.kindsnacks.com/">
		                    <img className="img-responsive img-hover sponsor" src={kind} alt="" />
		                </a>
		            </div>			            	            
		        </div>
		        

    			<Footer />
    		</div>
	    );
	}
}

export default Sponsors;