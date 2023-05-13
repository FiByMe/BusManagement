import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <>
        <section className="client_section layout_padding-bottom">
          <div className="container">
            <div className="heading_container heading_center psudo_white_primary mb_45" style={{ margin: "20px"}}>
              <h2>What Customers Says About Us</h2>
            </div>
            <div className="carousel-wrap row">
              <div className="">
                <div className="item">
                  <div className="box">
                    <div className="detail-box" style={{ padding: "15px" }}>
                      <div className="row">
                        <div
                          className="col-sm-3"
                          style={{ fontFamily: "Dancing Script, cursive" }}
                        >
                          <h4
                            style={{
                              marginBottom: "15px",
                              padding: "0px 0px 0px 50px",
                            }}
                          >
                            Username
                          </h4>
                          <div
                            className="img-box"
                            style={{ margin: "20px 40.5px 0px" }}
                          >
                            <img
                              src="/theme/images/1.jpg"
                              alt=""
                              className="box-img"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="rate">
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              defaultValue={5}
                            />
                            <label htmlFor="star5" title="text">
                              5 stars
                            </label>
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              defaultValue={4}
                            />
                            <label htmlFor="star4" title="text">
                              4 stars
                            </label>
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              defaultValue={3}
                            />
                            <label htmlFor="star3" title="text">
                              3 stars
                            </label>
                            <input
                              type="radio"
                              id="star2"
                              name="rate"
                              defaultValue={2}
                            />
                            <label htmlFor="star2" title="text">
                              2 stars
                            </label>
                            <input
                              type="radio"
                              id="star1"
                              name="rate"
                              defaultValue={1}
                            />
                            <label htmlFor="star1" title="text">
                              1 star
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div
                            className="container"
                            style={{ marginTop: "30px" }}
                          >
                            <h1>Content</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-wrap row">
              <div className="">
                <div className="item">
                  <div className="box">
                    <div className="detail-box" style={{ padding: "15px" }}>
                      <div className="row">
                        <div
                          className="col-sm-3"
                          style={{ fontFamily: "Dancing Script, cursive" }}
                        >
                          <h4
                            style={{
                              marginBottom: "15px",
                              padding: "0px 0px 0px 50px",
                            }}
                          >
                            Username
                          </h4>
                          <div
                            className="img-box"
                            style={{ margin: "20px 40.5px 0px" }}
                          >
                            <img
                              src="/theme/images/1.jpg"
                              alt=""
                              className="box-img"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="rate">
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              defaultValue={5}
                            />
                            <label htmlFor="star5" title="text">
                              5 stars
                            </label>
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              defaultValue={4}
                            />
                            <label htmlFor="star4" title="text">
                              4 stars
                            </label>
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              defaultValue={3}
                            />
                            <label htmlFor="star3" title="text">
                              3 stars
                            </label>
                            <input
                              type="radio"
                              id="star2"
                              name="rate"
                              defaultValue={2}
                            />
                            <label htmlFor="star2" title="text">
                              2 stars
                            </label>
                            <input
                              type="radio"
                              id="star1"
                              name="rate"
                              defaultValue={1}
                            />
                            <label htmlFor="star1" title="text">
                              1 star
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div
                            className="container"
                            style={{ marginTop: "30px" }}
                          >
                            <h1>Content</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Comment;