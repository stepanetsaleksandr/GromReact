import React from "react";

class Toggler extends React.Component {
  handleClick(event) {
    event.target.textContent === "Off"
      ? (event.target.textContent = "On")
      : (event.target.textContent = "Off");
  }

  render() {
    return (
      <button className="toggler" onClick={this.handleClick}>
        Off
      </button>
    );
  }
}

export default Toggler;
