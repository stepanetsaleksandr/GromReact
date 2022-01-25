import React, { Component } from "react";
import TodoList from "./TodoList.jsx";

class App extends Component {
  render() {
    return (
      <div id="root">
        <TodoList />
      </div>
    );
  }
}

export default App;
