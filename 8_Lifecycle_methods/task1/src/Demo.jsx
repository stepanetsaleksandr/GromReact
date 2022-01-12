import React, { Component } from "react";
import Life from "./Life.jsx";

class Demo extends Component {
  state = { number: Math.round(Math.random() * 100), visible: true };
  show = () => {
    this.setState({ visible: false });
  };
  hide = () => {
    this.setState({ visible: true });
  };
  update = () => {
    this.setState({ number: Math.round(Math.random() * 100) });
  };
  render() {
    return (
      <div>
        <div>
          <button className="btn" onClick={this.show}>
            show
          </button>
          <button className="btn" onClick={this.hide}>
            hide
          </button>
          <button className="btn" onClick={this.update}>
            update
          </button>
        </div>
        <div className="number">
          {this.state.visible || <Life number={this.state.number} />}
        </div>
      </div>
    );
  }
}

export default Demo;
