import React, { Component } from 'react';
import 'react-bootstrap';
import Feed from './Feed.js';
import NotFound from './NotFound.js'
import PaintingArchive from './PaintingArchive.js';
import Painting from './Painting.js';
import Events from './Events.js';
import Administration from './Administration.js';
import {getPaintingsList} from './Server.js';

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
      this.state = {modalLoginIsOpen: false,
                    modalRegisterIsOpen: false,
                    paintingslist: []
              }
}

componentDidMount(){
  getPaintingsList((images)=>{
    this.setState({paintingslist: images})
  });
}
openLoginModal(e) {
  this.setState({modalLoginIsOpen: true});
}

closeLoginModal(e) {
  this.setState({modalLoginIsOpen: false});
}

openRegisterModal(e) {
  this.setState({modalRegisterIsOpen: true});
}

closeRegisterModal(e) {
  this.setState({modalRegisterIsOpen: false});
}



  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalLoginIsOpen}
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
              <div className="btn btn-default align-left" onClick={(e) => this.closeLoginModal(e)}>close</div>
              <div className="btn btn-default align right" onClick={(e) => this.closeLoginModal(e)}>submit</div>
              </div>
            </div>
        </Modal>

        <Modal
          isOpen={this.state.modalRegisterIsOpen}
          contentLabel="Example Modal"
          style = {customStyles}
        >

          <h2 ref="subtitle" className="">Register</h2>
            <div className="modal-text-padding">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="email or username" aria-describedby="basic-addon2"/>
            </div>
            <br/>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="password" aria-describedby="basic-addon2"/>
              </div>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="re-type password" aria-describedby="basic-addon2"/>
              </div>
              <br/>
              <div className="row">
              <div className="btn btn-default align-left" onClick={(e) => this.closeRegisterModal(e)}>close</div>
              <div className="btn btn-default align right" onClick={(e) => this.closeRegisterModal(e)}>submit</div>
              </div>
            </div>
        </Modal>


      <nav className="navbar navbar-light navbar-padding">
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
            <li><Link to={{pathname:'/archive',state:{paintingslist:this.state.paintingslist}}}>Archive <span className="sr-only"></span></Link></li>
            <li><Link to="/events">Events <span className="sr-only"></span></Link></li>
          </ul>

          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>

            <ul className="nav navbar-nav navbar-right">
              <li><Link to={{pathname:'/administration',state:{paintingslist:this.state.paintingslist}}}>Admin</Link></li>
              <li><a href="#" onClick={(e) => this.openRegisterModal(e)}>Register</a></li>
              <li><a href="#" onClick={(e) => this.openLoginModal(e)}>Login</a></li>
            </ul>
          </div>
          </div>
        </nav>
        <Main {...this.state}/>
    </div>
    );
  }
}

const Main = (state) => (
  <main>
    <Switch>
      <Route exact path='/'  component={Feed}/>
      <Route path='/administration' component={Administration}/>
      <Route path='/archive' component={PaintingArchive}/>
      <Route path='/painting' component={Painting}/>
      <Route path='/events' component={Events}/>
      <Route path='/*' component={NotFound}/>
    </Switch>
  </main>
)

export default App;
