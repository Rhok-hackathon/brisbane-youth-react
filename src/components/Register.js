import React, { Component } from "react";
import { Button } from "../styles/components/Register.styles";

class Register extends Component {
  state = {
    userName: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendForm = e => {
    //insert interaction
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form className="register-form">
          <div className="lg-headtext"> User Name </div>
          <input
            name="userName"
            placeholder="user name"
            onChange={this.handleChange}
          />
          <div className="lg-headtext"> Password </div>
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
        </form>
        <Button onClick={this.sendForm}> Register</Button>
      </div>
    );
  }
}

export default Register;
