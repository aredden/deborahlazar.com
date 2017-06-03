import React, { Component } from 'react';
import 'react-bootstrap';
import Gallery from './FeedGallery.js';

class Feed extends Component {
  render() {
    return (
      <div>
        <section className="engine">
          <a rel="external" href="https://mobirise.com">mobirise.com</a>
        </section>
        <section className="mbr-section mbr-section-hero mbr-section-full mbr-parallax-background mbr-section-with-arrow backgroundimg-custom" id="header1-1">
            <div className="mbr-table-cell">
                <div className="container">
                    <div className="row">
                        <div className="mbr-section col-md-10 col-md-offset-1 text-xs-center">
                            <h1 className="mbr-section-title display-1">Deborah Lazar's<br/>Art Gallery</h1>
                            <p className="mbr-section-lead lead">
                              Click any text to edit or style it.
                              Click blue "Gear" icon in the top right corner to hide/show buttons,
                              text, title and change the block background. <br/> Click red "+" in the bottom
                              right corner to add a new block. Use the top left menu to create new pages,
                              sites and add extensions.
                            </p>
                            <div className="mbr-section-btn">
                              <a className="btn btn-lg btn-primary" href="https://mobirise.com">CLICK TO EDIT</a>
                              <a className="btn btn-lg btn-white btn-white-outline" href="https://mobirise.com">CLICK TO EDIT</a></div>
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
                        <a className="text-white" href="https://mobirise.com/">Website builder</a></li><li>
                          <a className="text-white" href="https://mobirise.com/mobirise-free-win.zip">Download for Windows</a></li>
                          <li>
                          <a className="text-white" href="https://mobirise.com/mobirise-free-mac.zip">Download for Mac</a></li></ul></div>
                    <div className="col-xs-12 col-md-6">
                        <div className="mbr-map">
                        <iframe frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw" allowFullScreen="">
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
