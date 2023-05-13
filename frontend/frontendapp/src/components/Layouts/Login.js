import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    credentials: { username: "", password: "" },
  };

  login = (event) => {
    console.log(this.state.credentials);
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/auth/",
      data: {
        username: this.state.credentials.username,
        password: this.state.credentials.password,
      },
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      this.props.history.push("/home"); // chuyển hướng đến trang home
    })
    .catch((error) => console.error(error));
};

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
     // kiểm tra xem token đã tồn tại chưa
     if (localStorage.getItem("token")) {
      this.props.history.push("/home"); // nếu tồn tại, chuyển hướng đến trang home
    }
    return (
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
                    name="username"
                    className="form-input"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}
                  ></input>
                </div>
                <div className="form-register">
                  <a href="/register" style={{color: "black"}}>Create Account</a>
                </div>
                <div className="form_container">
                  <div className="btn_box">
                    <div className="form-submit">
                      <button onClick={this.login}>Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
    );
  }
}

export default Login;
