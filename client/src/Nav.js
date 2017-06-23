import React, { Component } from 'react';
import 'react-bootstrap';
import Home from './Home.js';
import NotFound from './NotFound.js'
import PaintingArchive from './PaintingArchive.js';
import Painting from './Painting.js';
import Events from './Events.js';
import Blog from './Blog.js'
import Register from './Register.js';
import Login from './Login.js';
import Administration from './Administration.js';
import {getPaintingsList} from './server/Server.js';
import AuthenticateUser from './AuthenticateUser.js'

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


class Nav extends Component {
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
                        <a href="#" className="navbar-logo"><img src="assets/images/mbr-192x128.jpg" alt="Mobirise"/></a>
                        <a className="navbar-caption" href="#">DLPaintorama</a>
                    </div>

                </div>
                <div className="mbr-table-cell">

                    <button className="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        <div className="hamburger-icon"></div>
                    </button>

                    <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                      <li className="nav-item">
                        <Link className="nav-link link" to={{pathname:'/archive',state:{paintingslist:this.state.paintingslist}}}>ARCHIVE</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link link dropdown-toggle" data-toggle="dropdown-submenu" href="#" aria-expanded="false">EVENTS</a>
                      <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Mobile friendly</a>
                      <a className="dropdown-item" href="#">Based on Bootstrap</a>
                      <div className="dropdown">
                        <a className="dropdown-item dropdown-toggle" data-toggle="dropdown-submenu" href="#">Trendy blocks</a>
                        <div className="dropdown-menu dropdown-submenu">
                          <a className="dropdown-item" href="#">Image/content slider</a>
                          <a className="dropdown-item" href="#">Contact forms</a>
                          <a className="dropdown-item" href="#">Image gallery</a>
                          <a className="dropdown-item" href="#">Mobile menu</a>
                          <a className="dropdown-item" href="#">Google maps</a>
                          <a className="dropdown-item" href="#">Social buttons</a>
                          <a className="dropdown-item" href="#">Google fonts</a>
                          <a className="dropdown-item" href="#">Video background</a>
                        </div>
                      </div>
                        <a className="dropdown-item" href="#">Host anywhere</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link link dropdown-toggle" data-toggle="dropdown-submenu" href="#">DASHBOARD</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Orders</a>
                        <a className="dropdown-item" href="#">Comments</a>
                      </div>
                    </li>
                    <li className="nav-item nav-btn">
                      <Link to="/blog" className="nav-link btn btn-white btn-white-outline">BLOG</Link>
                    </li>
                    <li className="nav-item nav-btn">
                      <Link to="/login" className="nav-link btn btn-white btn-white-outline">LOGIN</Link>
                    </li>
                    <li className="nav-item nav-btn">
                      <Link to="/register" className="nav-link btn btn-white btn-white-outline">REGISTER</Link>
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
                  () => <Home images={this.state.paintingslist}/>
                }/>
              <Route path='/administration' component={Administration}/>
              <Route path='/archive' render={
                  () => <PaintingArchive paintingslist={this.state.paintingslist}/>
                }/>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/painting' component={Painting}/>
              <Route path='/events' component={Events}/>
              <Route path='/authenticate' component={AuthenticateUser}/>
              <Route path='/*' component={NotFound}/>
            </Switch>
          </main>
        }
    </div>
    );
  }
}


export default Nav;
