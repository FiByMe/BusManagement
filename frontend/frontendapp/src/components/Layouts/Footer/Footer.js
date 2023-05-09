import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer_section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-col">
                <div className="footer_contact">
                  <h4>Contact Us</h4>
                  <div className="contact_link_box">
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      <span>Location</span>
                    </a>
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-phone" aria-hidden="true" />
                      <span>Call +03 45695491</span>
                    </a>
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span>busmanagement@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 footer-col">
                <div className="footer_detail">
                  <a
                    href=""
                    style={{ textDecoration: "none" }}
                    className="footer-logo"
                  >
                    BusManagement
                  </a>
                  <p>Your satisfaction is our motivation to improve.</p>
                  <div className="footer_social">
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="" style={{ textDecoration: "none" }}>
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 footer-col">
                <h4>Opening Hours</h4>
                <p>Everyday</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
