import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import PageTitle from '../PageTitle';
import pic1 from '../../assets/img/gallery/pic1.jpg';
import pic2 from '../../assets/img/gallery/pic2.jpg';
import pic3 from '../../assets/img/gallery/pic3.jpg';
import pic4 from '../../assets/img/gallery/pic4.jpg';
import pic5 from '../../assets/img/gallery/pic5.jpg';
import pic6 from '../../assets/img/gallery/pic6.jpg';
import pic7 from '../../assets/img/gallery/pic7.jpg';
import pic8 from '../../assets/img/gallery/pic8.jpg';
import pic9 from '../../assets/img/gallery/pic9.jpg';
import pic10 from '../../assets/img/gallery/pic10.jpg';
import pic11 from '../../assets/img/gallery/pic11.jpg';
import pic12 from '../../assets/img/gallery/pic12.jpg';
import pic13 from '../../assets/img/gallery/pic13.jpg';
import pic14 from '../../assets/img/gallery/pic14.jpg';
import pic15 from '../../assets/img/gallery/pic15.jpg';
import pic16 from '../../assets/img/gallery/pic16.jpg';
import galleryTitle from '../../assets/img/titles/gallery-title.png';

// https://hackernoon.com/improve-your-ux-by-dynamically-rendering-images-via-react-onload-393fd4d0d946
// https://www.npmjs.com/package/react-medium-image-zoom

// test for heroku

class Gallery extends Component {
	/* constructor(props) {
		super(props);
		this.getStyle = this.getStyle.bind(this);
	}

	getStyle(image) {
		if (image.height > image.width) {
			return { height: '100%', width: 'auto', borderStyle: 'solid', borderWidth: '1px', marginTop: '3em'}
		} else {
			return { width: '100%', borderStyle: 'solid', borderWidth: '1px', marginTop: '3em'}
		}
	} */

    render() {

		// var centerBox = {
		// 	display: 'flex',
		// 	justifyContent: 'center',
		// 	alignItems: 'center',
		// 	overflow: 'hidden',
		// 	height: '16em',

		// 	flexShrink: '0',
		// 	minWidth: '100%',
		// 	minHeight: 'auto'
		// };


		// style={centerBox}
		/* var centerBox = {
			height: '16em'
		};

		var colDiv = {
			height: '100%'
		}

		var centerItem = {
			objectFit: 'cover'
		}

		var spacing = {
			marginBottom: '3em'
		}
		var spacingTop = {
			marginTop: '3em',
			marginBottom: '3em'
		}

		return (
			<div>
				<PageTitle 
					image={galleryTitle}
					alternate="Gallery"
				/>
				<div className="container">
					<div className="row">
						<div className="col-sm-3 galleryimg" style={colDiv}>
							<ImageZoom
								image={{
									src: pic1,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic1)
									}}
								zoomImage={{
									src: pic1,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic2,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic2)
									}}
								zoomImage={{
									src: pic2,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic3,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic3)
									}}
								zoomImage={{
									src: pic3,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic4,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic4)
									}}
								zoomImage={{
									src: pic4,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic5,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic5)
									}}
								zoomImage={{
									src: pic5,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic6,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic6)
									}}
								zoomImage={{
									src: pic6,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic7,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic7)
									}}
								zoomImage={{
									src: pic7,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic8,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic8)
									}}
								zoomImage={{
									src: pic8,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic9,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic9)
									}}
								zoomImage={{
									src: pic9,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic10,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic10)
									}}
								zoomImage={{
									src: pic10,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic11,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic11)
									}}
								zoomImage={{
									src: pic11,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic12,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic12)
									}}
								zoomImage={{
									src: pic12,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic13,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic13)
									}}
								zoomImage={{
									src: pic13,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic14,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic14)
									}}
								zoomImage={{
									src: pic14,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic15,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic15)
									}}
								zoomImage={{
									src: pic15,
									alt: 'Same Image but largened'
								}}
							/>
						</div>
						<div className="col-sm-3" style={colDiv}>
							<ImageZoom
								image={{
									src: pic16,
									alt: 'Golden Gate Bridge',
									className: 'img',
									style: this.getStyle(pic16)
									}}
								zoomImage={{
									src: pic16,
									alt: 'Same Image but largened'
								}}
							/>
						</div>						
					</div>
				</div><br /><br />
			</div>


	    );*/

	    return(
	    	<div> 
				<div id="carouselExampleControls" class="carousel slide carousel2-images carousel-center gallerycarousel" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
						  <img class="w-100" src={pic1} alt="Picture 1" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic2} alt="Picture 2" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic3} alt="Picture 3" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic4} alt="Picture 4" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic5} alt="Picture 5" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic6} alt="Picture 6" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic7} alt="Picture 7" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic8} alt="Picture 8" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic9} alt="Picture 9" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic10} alt="Picture 10" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic11} alt="Picture 11" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic12} alt="Picture 12" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic13} alt="Picture 13" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic14} alt="Picture 14" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic15} alt="Picture 15" />
						</div>
						<div class="carousel-item">
						  <img class="w-100" src={pic16} alt="Picture 16" />
						</div>
					</div>
	               <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		                <span class="sr-only">Previous</span>
	              </a>
	              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
	                <span class="carousel-control-next-icon" aria-hidden="true"></span>
	                <span class="sr-only">Next</span>
	              </a>
	            </div>
	    	</div>
	    );
	}
}

export default Gallery;