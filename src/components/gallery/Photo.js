import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';

// https://hackernoon.com/improve-your-ux-by-dynamically-rendering-images-via-react-onload-393fd4d0d946
// https://www.npmjs.com/package/react-medium-image-zoom


class Gallery extends Component {
    constructor(props) {
        super(props)
        this.getStyle = this.getStyle.bind(this);
    }

    getStyle(image) {
		if (image.height > image.width) {
			return { height: '100%', width: 'auto', borderStyle: 'solid', borderWidth: '1px', marginTop: '3em'}
		} else {
			return { width: '100%', borderStyle: 'solid', borderWidth: '1px', marginTop: '3em'}
		}
	}

    render() {

        var colDiv = {
			height: '100%'
        }
        
		return (
            <div className="col-sm-3" style={colDiv}>
				<ImageZoom
                    image={{
                        src: this.props.image,
                        alt: this.props.alternate,
                        className: 'img',
                        style: this.getStyle(this.props.image)
                    }}
                    zoomImage={{
                        src: this.props.image,
                        alt: 'Same Image but largened'
                    }}
			    />
            </div>
	    );
	}
}

export default Gallery;