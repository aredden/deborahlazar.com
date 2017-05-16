import React, { Component } from 'react';
import './App.css'
import 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import Gallery from './FeedGallery.js'

class Feed extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron text-center ">
          <div className="container body-padding">
            <h1 className="jumbotron-heading">Hello, fellow Painters!</h1>
            <p className="lead text-muted">Southern Vermont planair paintings</p>
            <p>
              <a href="#" className="btn btn-primary">Buy art</a>
              <a href="#" className="btn btn-secondary">Learn more</a>
            </p>
          </div>
        </section>
        <section>
          <Gallery/>
        </section>

  </div>
    );
  }
}

export default Feed;
