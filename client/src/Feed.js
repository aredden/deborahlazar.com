import React, { Component } from 'react';
import 'react-bootstrap';
import Gallery from './FeedGallery2.js';

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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="footerheight text-center">
            Artworking copyright 2016(c)
            <br/>
        </section>
      </div>
    );
  }
}

export default Feed;
