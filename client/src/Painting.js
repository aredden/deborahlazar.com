
import React, { Component } from 'react';
import 'react-bootstrap';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

class Painting extends Component {
  render() {
    return (
      <div className="container body-padding">
      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 col-md-8">
          <div className="thumbnail">
              <img src="..." alt="..."/>
              <div className="caption">
                <h3>Painting amongst the ticks</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
          </div>
        </div>
        <div className="col-md-2">
        </div>
      </div>
    </div>
    );
  }
}

export default Painting
