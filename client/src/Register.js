import React, { Component } from 'react';
import 'react-bootstrap';
import {putNewUser} from './server/Server.js'

class Register extends Component{
  constructor(props) {
      super(props);
      this.state={
        fname:"",
        lname:"",
        email:"",
        email2:"",
        pass:"",
        pass2:"",
        phone:"",
        resp:""
      }
      this.handleFnameChange = this.handleFnameChange.bind(this);
      this.handleLnameChange = this.handleLnameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleEmail2Change = this.handleEmail2Change.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handlePass2Change = this.handlePass2Change.bind(this);
      this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  componentDidMount(){

  }

  handleSubmitUser(e){
    e.preventDefault();
    putNewUser(this.state.fname,this.state.lname,this.state.email,this.state.email2,
    this.state.phone,this.state.pass,this.state.pass2,
    (response)=>this.setState({resp:response}))
  }

  handleFnameChange(event) {
    event.preventDefault();
    this.setState({fname: event.target.value});
  }
  handleLnameChange(event) {
    event.preventDefault();
    this.setState({lname: event.target.value});
  }
  handleEmailChange(event) {
    event.preventDefault();
    this.setState({email: event.target.value});
  }
  handleEmail2Change(event) {
    event.preventDefault();
    this.setState({email2: event.target.value});
  }
  handlePassChange(event) {
    event.preventDefault();
    this.setState({pass: event.target.value});
  }
  handlePass2Change(event) {
    event.preventDefault();
    this.setState({pass2: event.target.value});
  }
  handlePhoneChange(event) {
    event.preventDefault();
    this.setState({phone: event.target.value});
  }

  render() {
    debugger;
    return (
      <div>
      <section className="engine"><a rel="external" href="#">Mobirise</a></section>

    <section className="mbr-section mbr-after-navbar register-after-navbar" id="form1-4">

    <div className="mbr-section mbr-section__container mbr-section__container--middle">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 text-xs-center">
                    <h3 className="mbr-section-title display-2">REGISTER</h3>
                    <small className="mbr-section-subtitle">Register to buy, comment on art, blogs and sign up for events!</small>
                </div>
            </div>
        </div>
    </div>
    <div className="mbr-section mbr-section-nopadding">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-lg-10 col-lg-offset-1" data-form-type="formoid">

                    <form action="#" data-form-title="CONTACT FORM">
                        <div className="row row-sm-offset">
                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">First Name<span className="form-asterisk">*</span></label>
                                    <input className="form-control" value={this.state.fname} onChange={this.handleFnameChange}/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">Last Name<span className="form-asterisk">*</span></label>
                                    <input className="form-control" value={this.state.lname} onChange={this.handleLnameChange} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">Email<span className="form-asterisk">*</span></label>
                                    <input className="form-control" value={this.state.email} onChange={this.handleEmailChange}/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label" >Re-type Email</label>
                                    <input className="form-control" value={this.state.email2} onChange={this.handleEmail2Change}/>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label" >Phone</label>
                                    <input className="form-control" value={this.state.phone} onChange={this.handlePhoneChange}/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label" >Password</label>
                                    <input className="form-control" value={this.state.pass} onChange={this.handlePassChange}/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label" >Re-type Password</label>
                                    <input className="form-control" value={this.state.pass2} onChange={this.handlePass2Change}/>
                                </div>
                            </div>

                        </div>
                        <div><button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmitUser(e)}>REGISTER</button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<footer className="mbr-small-footer mbr-section mbr-section-nopadding register-footer-custom" id="footer1-2">
    <div className="container">
        <p className="text-xs-center">Copyright (c) 2016 Artworking</p>
    </div>
</footer>
</div>
    );
  }
}

export default Register
