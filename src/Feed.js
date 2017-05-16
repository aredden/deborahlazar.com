import React, { Component } from 'react';
import './App.css'
import 'react-bootstrap';


class Feed extends Component {
  render() {
    return (
      <div>
      <div className="container container-fluid body-padding feed-scrolling">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="jumbotron">
              <h1>Hello, fellow painters!</h1>
              <p>I really like painting</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">PAINT SOME STUFF YO</a></p>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/v8QcpmBrLpA"></iframe>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-md-2">
      </div>
    </div>
    );
  }
}

export default Feed;
