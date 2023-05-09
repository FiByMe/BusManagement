import React, { Component } from "react";

class Company extends Component {
  render() {
    return (
      <>
        <section className="about_section layout_padding">
          <div className="container  ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="img-box">
                  <img src="/theme/images/meme.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <section className="footer_section" style={{ padding: "0" }}>
                    <div>
                      <h2>Company Name</h2>
                    </div>
                    <div>
                      <div className="footer_contact">
                        <div className="contact_link_box">
                          <a
                            href=""
                            style={{
                              textDecoration: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
                            <span>Location</span>
                          </a>
                          <a
                            href=""
                            style={{
                              textDecoration: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <i className="fa fa-phone" aria-hidden="true" />
                            <span>Call</span>
                          </a>
                          <a
                            href=""
                            style={{
                              textDecoration: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <span>Email</span>
                          </a>
                          <a
                            href=""
                            style={{
                              textDecoration: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <span>busCompanyIsVerified </span>
                            <i className="fa fa-arrows-h" aria-hidden="true" />
                            <span>busCompanyIsAcceptingDelivery</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="" style={{ textDecoration: "none" }}>
                      Read More
                    </a>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Company;
