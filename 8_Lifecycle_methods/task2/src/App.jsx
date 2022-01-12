import React, { Component } from "react";
import Clock from "./Clock.jsx";

class App extends Component {
  state = { visible: true };
  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <div>
        <button className="clock" onClick={this.toggle}>
          Hide
        </button>
        <div>
          {this.state.visible && (
            <>
              <Clock location="London" offset={0} />
              <Clock location="Kiev" offset={2} />
              <Clock location="New York" offset={-5} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
