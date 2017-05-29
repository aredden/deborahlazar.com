import React, { Component } from 'react';
import Slider from 'react-slick';

class Gallery extends Component {

  render() {
    const settings = {
      autoPlay: true,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      centerMode: true
    };
    return (
      <Slider {...settings}>
        <div><img src="img/01-02-16SilverCoffeePot_9206-1000.jpg" className="slideshow-size" /></div>
        <div><img src="img/rainbows-02-1000_1105.jpg" className="slideshow-size"/></div>
        <div><img src="img/07-6-16-hotRocks2054-1000.jpg" className="slideshow-size"/></div>
        <div><img src="img/09-22-16-6Peppers_2723-1000.jpg" className="slideshow-size"/></div>
        <div><img src="img/07-14-16Quarry-9x12_1710-1000.jpg" className="slideshow-size"/></div>
      </Slider>
    );
}
}
export default Gallery
