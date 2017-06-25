import React, { Component } from 'react';
import Register from './Register.js';
import Login from './Login.js';
import { Link } from 'react-router-dom';

class NavUser extends Component{

  constructor(props) {
      super(props);
      this.state={
        user:""
      }
  }

  componentDidMount(){

  }

  render(){
    debugger;
  if(this.props.user==""){
  return(
    <div className="nav-user-padding">
    <li className="nav-item nav-btn">
      <Link to="/login" className="nav-link btn btn-white btn-white-outline">LOGIN</Link>
    </li>
    <li className="nav-item nav-btn">
      <Link to="/register" className="nav-link btn btn-white btn-white-outline">REGISTER</Link>
    </li>
    </div>
  )}
  else {return(
    <div className="nav-user-padding">
    <li className="nav-item nav-btn">
      <Link to="/login" className="nav-link btn btn-white btn-white-outline">SIGN OUT</Link>
    </li>
    </div>
  )}};
}
export default NavUser
