import React, { Component } from "react";
import Spinner from "./Spinner.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      processing: true,
    };
  }

  onLogin = () => {
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

  onLogout = () => {
    this.setState({ processing: true, isLoggedIn: true });
  };

  render() {
    return (
      <div className="panel">
        {this.state.processing && this.state.processing ? (
          <Login onLogin={this.onLogin} />
        ) : this.state.isLoggedIn && !this.state.processing ? (
          <Spinner size={50} />
        ) : (
          <Logout onLogout={this.onLogout} />
        )}
      </div>
    );
  }
}

export default Auth;
