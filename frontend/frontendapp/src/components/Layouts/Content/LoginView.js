import React, { Component } from "react";

class LoginView extends Component {
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
            <div id="wrapper">
              <form className="form-login">
                <h1 className="form-heading">Login</h1>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Username"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                  ></input>
                </div>
                <div className="form_container">
                  <div className="btn_box">
                    <div className="form-submit">
                      <button>Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LoginView;
