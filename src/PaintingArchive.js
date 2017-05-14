import React, { Component } from 'react';
import 'react-bootstrap';


class PaintRowComponent extends Component{
  render() {
    return (
      <div>
        <section className="jumbotron text-center ">
          <div className="container body-padding">
            <h1 className="jumbotron-heading">Deborah Lazar's Album</h1>
            <p className="lead text-muted">Southern Vermont planair paintings</p>
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
            <a href="#" className="thumbnail">
              <img src="..." alt="..." />
            </a>
          </div>
          <div className="col-xs-6 col-md-2">
            <a href="#" className="thumbnail">
              <img src="..." alt="..." />
            </a>
          </div>
          <div className="col-xs-6 col-md-2">
            <a href="#" className="thumbnail">
              <img src="..." alt="..." />
            </a>
          </div>
          <div className="col-xs-6 col-md-2">
            <a href="#" className="thumbnail">
              <img src="..." alt="..." />
            </a>
          </div>
          </div>
    </div>
    );
  }
}

export default PaintRowComponent
