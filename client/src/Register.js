import React, { Component } from 'react';
import 'react-bootstrap';

class Register extends Component{
  render() {
    return (
      <div>
      <section className="engine"><a rel="external" href="#">Mobirise</a></section>

    <section className="mbr-section mbr-after-navbar register-after-navbar" id="form1-4">

    <div className="mbr-section mbr-section__container mbr-section__container--middle">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 text-xs-center">
                    <h3 className="mbr-section-title display-2">CONTACT FORM</h3>
                    <small className="mbr-section-subtitle">Shape your future web project with sharp design and refine coded functions.</small>
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
                                    <label className="form-control-label">Name<span className="form-asterisk">*</span></label>
                                    <input type="text" className="form-control" name="name" required="" data-form-field="Name" id="form1-4-name"/>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label">Email<span className="form-asterisk">*</span></label>
                                    <input type="email" className="form-control" name="email" required="" data-form-field="Email" id="form1-4-email"/>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label" >Phone</label>
                                    <input type="tel" className="form-control" name="phone" data-form-field="Phone" id="form1-4-phone"/>
                                </div>
                            </div>

                        </div>

                        <div className="form-group">
                            <label className="form-control-label">Message</label>
                            <textarea className="form-control" name="message" rows="7" data-form-field="Message" id="form1-4-message"></textarea>
                        </div>

                        <div><button type="submit" className="btn btn-primary">CONTACT US</button></div>

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
