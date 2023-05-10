import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <>
        <div className="hero_area">
          <div className="bg-box">
            <img
              src="https://cdn.dribbble.com/userupload/3166340/file/original-7c0949addb967b19d37ee942722c1fc0.png?compress=1&resize=1024x768"
              alt="None"
            />
          </div>
          <section
            className="book_section layout_padding"
            style={{ padding: "100px" }}
          >
            <div className="container" style={{marginTop: "50px"}}>
              <div className="heading_container">
                <h1>Register</h1>
              </div>
              <div className="form_container">
                <form action="">
                  <div className="row" >
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="First name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="phone"
                      className="form-input"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="username"
                      className="form-input"
                      placeholder="Username"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-input"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-input"
                          placeholder="ConfirmPassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="btn_box">
                    <button>Create</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Register;
