import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggle = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggle}>
        {this.state.active ? "On" : "Off"}
      </button>
    );
  }
}
export default Toggler;
