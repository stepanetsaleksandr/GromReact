import React, { Component } from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

class Page extends Component {
  state = {
    userData: null,
  };
  componentDidMount() {
    this.fetchUser(this.props.userId);
  }
  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          userData: data,
        })
      );
  };
  render() {
    console.log(this.state.userData);
    if (!this.state.userData) {
      return null;
    }

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default Page;
