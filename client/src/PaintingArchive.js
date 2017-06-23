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
    if(this.props.paintingslist){
      this.setState({paintings:this.props.paintingslist})
    }else{
      if(this.props.location.state.paintingslist){
        this.setState({paintings:this.props.location.state.paintings})
      }
    }
  }

  render() {

    return (
      <div>
      <section className="jumbotron text-center archive-body-padding">
          <div className="container body-padding">
            <h1 className="jumbotron-heading">Art Archive</h1>
            <p className="lead text-muted">To buy art, look closer or comment on a painting: click on one of the thumbnail images.
            </p>
            <p>
              <a href="#" className="btn btn-primary">Learn more</a>
            </p>
          </div>
      </section>
      <div className="col-md-2"/>
      <div className="col-md-8">
      <div id="links" >
        {this.state.paintings.map((elem,index)=> {
          return(
            <Link to={{pathname:'/painting',state:{displayPainting:elem}}} href={elem} title={elem} key={index} className="archive-max-size">
                <img key={index} src={elem} alt="Banana"/>
            </Link>
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
