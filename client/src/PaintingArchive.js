import React, { Component } from 'react';
import 'react-bootstrap';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';


class PaintingArchive extends Component{

  constructor(props) {
      super(props);
      this.state = {paintings:[]
              }

  }

  componentDidMount(){


  }

  render() {
    return (
      <div>
      <section className="jumbotron text-center ">
          <div className="container body-padding">
            <h1 className="jumbotron-heading">Art Archive</h1>
            <p className="lead text-muted">Southern Vermont pleinair paintings</p>
            <p>
              <a href="#" className="btn btn-primary">Buy art</a>
              <a href="#" className="btn btn-secondary">Learn more</a>
            </p>
          </div>
      </section>
      <div className="col-md-2"/>
      <div className="col-md-8">
      <div id="links" >
        {this.props.location.state.paintingslist.map((elem,index)=> {
          return(
            <a href={elem} title={elem} className="archive-max-size">
                <img src={elem} alt="Banana"/>
            </a>
          )
        })}
      </div>
      </div>
      <div className="col-md-2"/>
      </div>
    );
  }
}

export default PaintingArchive
