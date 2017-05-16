import React, { Component } from 'react';
import './App.css'
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
        <img src={require("./pics/01-02-16SilverCoffeePot_9206-1000.jpg") } className="slideshow-size" />
        <img src={require("./pics/02-20-16Clemintinesand-Eucalyptis_9197-1000.jpg")} className="slideshow-size"/>
        <img src={require("./pics/03-22-16Oranges_9338.jpg")} className="slideshow-size"/>
        <img src={require("./pics/09-11-16Phloxx_2655-1000.jpg")}className="slideshow-size"/>
        <img src={require("./pics/07-16-16closeupofpainting_1782-1000.jpg")}className="slideshow-size"/>
      </AliceCarousel>
      </div>
    )
}
}
export default Gallery
