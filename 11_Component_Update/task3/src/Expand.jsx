import React, { Component } from "react";

class Expand extends Component {
  state = {
    isExpanded: false,
  };
  toggleContent = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContent}>
            {this.state.isExpanded ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </button>
        </div>
        <div className="expand__content">
          {this.state.isExpanded ? this.props.children : ""}
        </div>
      </div>
    );
  }
}
export default Expand;
