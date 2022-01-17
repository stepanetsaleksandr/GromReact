import React, { Component } from "react";
import UserForm from "./UserForm";

class App extends Component {
  createUser = (obj) => {
    console.log(obj);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
