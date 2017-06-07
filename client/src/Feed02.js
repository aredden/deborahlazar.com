import React, { Component } from 'react';
import 'react-bootstrap';
import Gallery from './FeedGallery.js';

class Feed extends Component {
  render() {
    return (
      <div>
        <section className="engine">
          <a rel="external" href="#">mobirise.com</a>
        </section>
        <section className="mbr-section mbr-section-hero mbr-section-full mbr-parallax-background mbr-section-with-arrow backgroundimg-custom" id="header1-1">
            <div className="mbr-table-cell">
                <div className="container">
                    <div className="row">
                        <div className="mbr-section col-md-10 col-md-offset-1 text-xs-center">
                            <h1 className="mbr-section-title display-1">Deborah Lazar's<br/>Art Gallery</h1>
                            <p className="mbr-section-lead lead">
                              Pleinair art from southern Vermont
                            </p>
                            <div className="mbr-section-btn">
                              <a className="btn btn-lg btn-primary" href="#">BUY ART</a>
                              <a className="btn btn-lg btn-white btn-white-outline" href="#">MORE INFO</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mbr-arrow mbr-arrow-floating" aria-hidden="true"><a href="#footer1-2">
              <i className="mbr-arrow-icon"></i></a></div>
        </section>

        <section>
          <Gallery images={this.props.images}/>
        </section>

        <section className="mbr-section mbr-section-md-padding mbr-footer footer2 sectioncolor-custom" id="contacts2-0">
            <div className="container">
                <div className="row">
                    <div className="mbr-footer-content col-xs-12 col-md-3">
                        <p><strong>Address</strong><br/>52 old route 5 south<br/>Putney, Vermont<br/>05346<br/><br/><br/>
                        <strong>Contacts</strong><br/>
                        Email: d@artworking.com<br/>
                      Phone: +1 (802) 558 4019<br/>
                        Fax: +1 (802) 387 8739</p>
                    </div>
                    <div className="mbr-footer-content col-xs-12 col-md-3"><p className="mbr-contacts__text">
                      <strong>Links</strong></p><ul><li>
                        <a className="text-white" href="#/">Facebook Page</a></li><li>
                          <a className="text-white" href="#/mobirise-free-win.zip">Instagram</a></li>
                          <li>
                          <a className="text-white" href="#/mobirise-free-mac.zip">Twitter</a></li></ul></div>
                    <div className="col-xs-12 col-md-6">
                        <div className="mbr-map">
                        <iframe frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735.905071085321!2d-72.52447923004841!3d42.969157945576114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e105ffad484ecd%3A0x10c90a3fc1755eab!2s52+Old+Rte+5%2C+Putney%2C+VT+05346!5e0!3m2!1sen!2sus!4v1496673450468" allowFullScreen="">
                        </iframe>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="mbr-small-footer mbr-section mbr-section-nopadding footercolor-custom" id="footer1-2" >
            <div className="container">
                <p className="text-xs-center">Copyright (c) 2016 Artworking</p>
            </div>
        </footer>

      </div>
    );
  }
}

export default Feed;
