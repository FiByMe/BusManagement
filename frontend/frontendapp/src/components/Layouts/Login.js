import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    credentials: { username: "", password: "" },
  };

  login = (event) => {
    console.log(this.state.credentials);
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/auth/login",
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
      <div>
        <h1>Login user form</h1>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default withRouter(Login);
