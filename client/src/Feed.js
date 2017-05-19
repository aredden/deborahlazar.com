import React, { Component } from 'react';
import 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import Gallery from './FeedGallery.js'

class Feed extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron text-center ">
          <div className="container body-padding">
            <h1 className="jumbotron-heading">Deborah Lazar's Art Gallery</h1>
            <p className="lead text-muted">Southern Vermont pleinair paintings</p>
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
