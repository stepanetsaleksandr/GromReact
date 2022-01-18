import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";

class App extends Component {
  state = {
    userData: { firstName: "John", lastName: "Doe" },
  };
  onChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();

    this.setState({
      userData: { ...this.state.userData, [name]: value },
    });
  };

  render() {
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} />
          <Profile userData={this.state.userData} onChange={this.onChange} />
        </main>
      </div>
    );
  }
}

export default App;
