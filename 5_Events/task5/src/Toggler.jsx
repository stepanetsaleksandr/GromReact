import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: "Off",
    };
  }

  setCondition = (event) => {
    this.setState({
      condition: event.target.textContent === "Off" ? "On" : "Off",
    });
  };

  render() {
    return (
      <div onClick={this.setCondition} className="toggler">
        {this.state.condition}
      </div>
    );
  }
}

export default Toggler;
