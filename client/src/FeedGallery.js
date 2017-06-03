import React, { Component } from 'react';
import Slider from 'react-slick';

class Gallery extends Component {
  constructor(props) {
      super(props);
      this.state = {paintings:this.props.images}
}

  render() {
    const settings = {
      infinite: true,
      centerMode: true,
      responsive:[
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          },
        },{
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          },
        },{
          breakpoint: 1800,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          },
        },
        {
          breakpoint: 2100,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          },
        },
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          },
        }
      ]
    };
    var paintings = this.props.images;
    if(paintings.length==0){
      return(<div></div>)
    }else{
    return (
      <Slider {...settings}>
        {paintings.map((image, index) => {
          return(
            <div><img key={index} src={image} className="slideshow-size" /></div>
          )
        })}
      </Slider>
    );
  }
}
}
export default Gallery
