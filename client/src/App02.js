import React, { Component } from 'react';
import 'react-bootstrap';
import Feed from './Feed02.js';
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
      <section id="menu-0">

    <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
        <div className="container">

            <div className="mbr-table">
                <div className="mbr-table-cell">

                    <div className="navbar-brand">
                        <a href="https://mobirise.com" className="navbar-logo"><img src="assets/images/mbr-192x128.jpg" alt="Mobirise"/></a>
                        <a className="navbar-caption" href="https://mobirise.com">DLPaintorama</a>
                    </div>

                </div>
                <div className="mbr-table-cell">

                    <button className="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        <div className="hamburger-icon"></div>
                    </button>

                    <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                      <li className="nav-item">
                        <a className="nav-link link" href="https://mobirise.com/">OVERVIEW</a></li>
                      <li className="nav-item dropdown">
                        <a className="nav-link link dropdown-toggle" data-toggle="dropdown-submenu" href="https://mobirise.com/" aria-expanded="false">FEATURES</a>
                      <div className="dropdown-menu">
                      <a className="dropdown-item" href="https://mobirise.com/">Mobile friendly</a>
                      <a className="dropdown-item" href="https://mobirise.com/">Based on Bootstrap</a>
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle" data-toggle="dropdown-submenu" href="https://mobirise.com/">Trendy blocks</a>
                        <div className="dropdown-menu dropdown-submenu">
                          <a className="dropdown-item" href="https://mobirise.com/">Image/content slider</a>
                          <a className="dropdown-item" href="https://mobirise.com/">Contact forms</a>
                          <a className="dropdown-item" href="https://mobirise.com/">Image gallery</a>
                          <a className="dropdown-item" href="https://mobirise.com/">Mobile menu</a>
                          <a className="dropdown-item" href="https://mobirise.com/">Google maps</a>
                          <a className="dropdown-item" href="https://mobirise.com/">Social buttons</a>
                          <a className="dropdown-item" href="https://mobirise.com/">Google fonts</a>
                          <a className="dropdown-item" href="https://mobirise.com/">Video background</a>
                        </div>
                      </div>
                        <a className="dropdown-item" href="https://mobirise.com/">Host anywhere</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link link dropdown-toggle" data-toggle="dropdown-submenu" href="https://mobirise.com/">HELP</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="http://forums.mobirise.com/">Forum</a>
                      <a className="dropdown-item" href="https://mobirise.com/">Tutorials</a>
                      <a className="dropdown-item" href="https://mobirise.com/">Contact us</a>
                    </div></li>
                    <li className="nav-item nav-btn">
                    <a className="nav-link btn btn-white btn-white-outline" href="https://mobirise.com/">DOWNLOAD</a>
                  </li>
                </ul>
                    <button hidden="" className="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        <div className="close-icon"></div>
                    </button>

                </div>
            </div>

        </div>
    </nav>
</section>
        {
          <main>
            <Switch>
              <Route exact path='/' render={
                  () => <Feed images={this.state.paintingslist}/>
                }/>
              <Route path='/administration' component={Administration}/>
              <Route path='/archive' component={PaintingArchive}/>
              <Route path='/painting' component={Painting}/>
              <Route path='/events' component={Events}/>
              <Route path='/*' component={NotFound}/>
            </Switch>
          </main>
        }
    </div>
    );
  }
}


export default App;
