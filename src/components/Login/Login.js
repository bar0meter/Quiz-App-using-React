import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    document.getElementById("loginForm").reset();
  };

  render() {
    return (
      <div className="container">
        <div className="card mx-auto">
          <div className="card-header text-center">
            <h2>Login</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleLogin} id="loginForm">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  onChange={this.handleUsername}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={this.handlePassword}
                />
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Login
              </button>
              <div className="mt-3 text-center">
                <a href="#" className="text-info">
                  Don't have an account? <b>Sign Up</b>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
<div>
  <p>Login</p>
</div>;
