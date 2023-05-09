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
          <section className="book_section layout_padding" style={{padding: "100px"}}>
            <div className="container">
              <div className="heading_container">
                <h1>Register</h1>
              </div>
              <div className="form_container">
                <form action>
                  <div className="row" style={{ marginBottom: 0 }}>
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <input
                      type="username"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="ConfirmPassword"
                      />
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
