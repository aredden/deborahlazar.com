import React, { Component } from 'react';
import 'react-bootstrap';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';


class PaintRowComponent extends Component{
  render() {
    return (
      <div>
        <section className="jumbotron text-center ">
          <div className="container body-padding">
            <h1 className="jumbotron-heading">Paintings Archive</h1>
            <p className="lead text-muted">Southern Vermont pleinair paintings</p>
            <p>
              <a href="#" className="btn btn-primary">Buy art</a>
              <a href="#" className="btn btn-secondary">Learn more</a>
            </p>
          </div>
        </section>
        <div className="container container-fluid feed-scrolling">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="container">
              <PaintElement />
            </div>
            <div className="container">
              <PaintElement />
            </div>
            <div className="container">
              <PaintElement />
            </div>
            <div className="container">
              <PaintElement />
            </div>
          </div>
          <div className="col-md-2">
          </div>
      </div>
    </div>
    );
    }
}

class PaintElement extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-md-2">
            <Link to="/painting" className="thumbnail">
              <img src="..." alt="..." />
            </Link>
          </div>
          <div className="col-xs-6 col-md-2">
            <Link to="/painting" className="thumbnail">
              <img src="..." alt="..." />
            </Link>
          </div>
          <div className="col-xs-6 col-md-2">
            <Link to="/painting" className="thumbnail">
              <img src="..." alt="..." />
            </Link>
          </div>
          <div className="col-xs-6 col-md-2">
            <Link to="/painting" className="thumbnail">
              <img src="..." alt="..." />
            </Link>
          </div>
          </div>
    </div>
    );
  }
}

export default PaintRowComponent
