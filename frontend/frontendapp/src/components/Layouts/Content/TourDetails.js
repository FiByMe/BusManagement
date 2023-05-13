import React, { Component } from "react";

class TourDetails extends Component {
  render() {
    return (
      <>
        <section className="about_section layout_padding">
          <div className="container  ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="img-box">
                  <img
                    src="/theme/images/2.jpg"
                    alt=""
                    className="img-shadow"
                  />
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
                            <i class="fa fa-bus" aria-hidden="true" />
                            <span>Bus Number</span>
                          </a>
                          <a
                            href=""
                            style={{
                              textDecoration: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <i class="fa fa-address-card" aria-hidden="true" />
                            <span>Driver Name</span>
                          </a>
                          <a
                            href=""
                            style={{
                              textDecoration: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <i class="fa fa-mobile" aria-hidden="true" />
                            <span>Driver Phonenumber</span>
                          </a>
                        </div>
                        <div>
                          <a
                            href=""
                            style={{
                              textDecoration: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <span>Start </span>
                            <i
                              class="fa fa-arrow-circle-right"
                              aria-hidden="true"
                            />
                            <span> End</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" style={{ textDecoration: "none" }}>
                      <i class="fa fa-money" aria-hidden="true"/>
                      <span> Price</span>
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

export default TourDetails;
