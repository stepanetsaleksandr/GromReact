import React, { Component } from "react";
import Spinner from "./Spinner.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  state = {
    isLoggedIn: false,
    processing: false,
  };

  handleLoginClick = () => {
    this.setState({
      processing: true,
    });
    setTimeout(() => {
      this.setState({
        processing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout />;
    }

    return <Login onLogin={this.handleLoginClick} />;
  }
}

export default Auth;
