import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import  login  from "./UserFunctions";
import API from "../../../utils/API";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = event => {
    event.preventDefault();

    console.log("handleSubmit");

    axios
      .post("/api/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        console.log(this.props);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/catalog"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        
        <div class="bg-img">
          <form class="containerLogin">
            <h1>Login</h1>

            <label for="email">
              <b>Email</b>
            </label>
            <input
              placeholder="Enter Email"
              name="email"
              required
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />

            <button 
            type="submit" 
            class="btn"
            onClick={this.onSubmit}
            disabled={!(this.state.email && this.state.password)}
            >
              Login
            </button>
          </form>
        </div>
      );
    }
  }
}
export default Login;
