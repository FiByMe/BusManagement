import React, { Component} from 'react'
import axios from 'axios'


class Login extends Component {

    state = {
        credentials: {username: '', password: ''}
    }

    login = event => {
        console.log(this.state.credentials);
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/auth/',
            data: {
              username: this.state.credentials.username,
              password: this.state.credentials.password
            }
          }).then (
            data => {
                console.log(data);
            }
        ).catch( error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div>
                <h1>Login user form</h1>
                <label>
                    Username:
                    <input type='text' name='username' 
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type='password' name='password' 
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}/>
                </label>
                <br/>
                <button onClick={this.login}>Login</button>
            </div>
        );
  }
}

export default Login;
