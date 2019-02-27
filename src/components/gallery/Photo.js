import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import pic1 from '../../assets/img/gallery/pic1.jpg';

// https://hackernoon.com/improve-your-ux-by-dynamically-rendering-images-via-react-onload-393fd4d0d946
// https://www.npmjs.com/package/react-medium-image-zoom


class Gallery extends Component {
    render() {
		return (
			<div>
				<div> GALLERY </div>
				<ImageZoom
                    image={{
                        src: pic1,
                        alt: 'The first Image',
                        className: 'img',
                        style: { width: '50em' }
                    }}
                    zoomImage={{
                        src: pic1,
                        alt: 'Same Image but largened'
                    }}
			    />
			</div>

	    );
	}
}

export default Gallery;