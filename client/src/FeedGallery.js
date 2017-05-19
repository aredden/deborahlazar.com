import React, { Component } from 'react';
import 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';


class Gallery extends Component {
  render() {
    const responsive = {
  0: {
    items: 1
  },
  600: {
    items: 3
  },
  1024: {
    items: 5
  }
};
    return (
      <div>
      <AliceCarousel
      duration={2000}
      autoPlay={true}
      responsive={responsive}
      autoPlayInterval={2000}
      autoPlayDirection="rtl">
        <img src="" className="slideshow-size" />
        <img src="" className="slideshow-size"/>
        <img src="" className="slideshow-size"/>
        <img src="" className="slideshow-size"/>
        <img src="" className="slideshow-size"/>
      </AliceCarousel>
      </div>
    )
}
}
export default Gallery
