import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';
import Feed from './Feed.js';
import NotFound from './NotFound.js'
import PaintRowComponent from './PaintingArchive.js';
import Painting from './Painting.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '30px'
  }
};


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {modalIsOpen: false}
}


openModal() {
  this.setState({modalIsOpen: true});
}

closeModal(e) {
  this.setState({modalIsOpen: false});
}


  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Example Modal"
          style = {customStyles}
        >
          <h2 ref="subtitle" className="">Login</h2>
            <div className="modal-text-padding">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="email or username" aria-describedby="basic-addon2"/>
            </div>
            <br/>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="password" aria-describedby="basic-addon2"/>
              </div>
              <br/>
              <div className="row">
              <div className="btn btn-default align-left" onClick={(e) => this.closeModal(e)}>close</div>
              <div className="btn btn-default align right" onClick={(e) => this.closeModal(e)}>submit</div>
              </div>
            </div>
        </Modal>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to='/' className="navbar-brand">DLPaintorama</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/archive">Archive <span className="sr-only"></span></Link></li>
            <li><a href="#">Link</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>

          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Join</a></li>
              <li><a href="#" onClick={(e) => this.openModal(e)}>Login</a></li>
            </ul>
          </div>
          </div>
        </nav>
    <Main />



    </div>


    );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feed}/>
      <Route path='/archive' component={PaintRowComponent}/>
      <Route path='/painting' component={Painting}/>
      <Route path='/*' component={NotFound}/>
    </Switch>
  </main>
)

export default App;
