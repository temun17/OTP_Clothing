import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });

    console.log("Submitted!");
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="password"
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
