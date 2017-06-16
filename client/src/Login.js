import React, { Component } from 'react';
import 'react-bootstrap';
import {loginUser} from './server/Server.js'
class Login extends Component{
  constructor(props) {
      super(props);
      this.state={
        email:"",
        pass:"",
        resp:""
      }
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
  }

  handleLoginUser(e){
    e.preventDefault();
    loginUser(this.state.email,this.state.pass,
    (response)=>this.setState({resp:response}))
  }

  handleEmailChange(event) {
    event.preventDefault();
    this.setState({email: event.target.value});
  }
  handlePassChange(event) {
    event.preventDefault();
    this.setState({Pass: event.target.value});
  }

  render() {
    return (
      <div>
      <section className="engine"><a rel="external" href="#">Mobirise</a></section>
    <section className="mbr-section mbr-after-navbar register-after-navbar" id="form1-4">

    <div className="mbr-section mbr-section__container mbr-section__container--middle">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 text-xs-center">
                    <h3 className="mbr-section-title display-2">LOGIN</h3>
                    <small className="mbr-section-subtitle">comment on art, buy art, view orders, sign up for events...</small>
                </div>
            </div>
        </div>
    </div>
    <div className="mbr-section mbr-section-nopadding">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-lg-10 col-lg-offset-1" data-form-type="formoid">

                    <form action="#" method="post" data-form-title="CONTACT FORM">
                        <div className="row row-sm-offset">

                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">Email<span className="form-asterisk">*</span></label>
                                    <input className="form-control" value={this.state.email} onChange={this.handleEmailChange}/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">Password<span className="form-asterisk">*</span></label>
                                    <input className="form-control" value={this.state.pass} onChange={this.handlePassChange}/>
                                </div>
                            </div>

                        </div>
                        <div><button type="submit" className="btn btn-primary" onClick={(e) => this.handleLoginUser(e)}>LOGIN</button></div>

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
    )
  }
}

export default Login
