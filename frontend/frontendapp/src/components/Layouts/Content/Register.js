import React, { Component } from "react";
import axios from 'axios'

class Register extends Component {
  state = {
    userinfo: {
      username: "",
      password: "",
      // firstname: "",
      email: ""
      // phone: "",
    },
  };

  register = (event) => {
    console.log(this.state.userinfo);
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/users/",
      data: {
        username: this.state.userinfo.username,
        password: this.state.userinfo.password,
        email: this.state.userinfo.email
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  inputChanged = (event) => {
    const userinf = this.state.userinfo;
    userinf[event.target.name] = event.target.value;
    this.setState({ userinfo: userinf });
  };

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
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                      value={this.state.userinfo.email}
                      onChange={this.inputChanged}
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
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      value={this.state.userinfo.username}
                      onChange={this.inputChanged}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.userinfo.password}
                        onChange={this.inputChanged}
                      />
                    </div>
                    {/* <div className="col-md-6 mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="ConfirmPassword"
                      />
                    </div> */}
                  </div>
                  <div className="btn_box">
                    <button onClick={this.register}>Register</button>
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
