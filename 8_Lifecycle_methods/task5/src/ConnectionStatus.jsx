import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("offline", this.setOffline);
    window.addEventListener("online", this.setOnline);
  }

  setOnline = () => {
    this.setState({ status: "online" });
  };

  setOffline = () => {
    this.setState({ status: "offline" });
  };

  componentWillUnmount() {
    window.removeEventListener("offline", this.setOffline);
    window.removeEventListener("online", this.setOnline);
  }

  netStatus = (state) => {
    const connection = state === "offline" ? "status status_offline" : "status";
    return connection;
  };

  render() {
    return (
      <div className={this.netStatus(this.state.status)}>
        {this.state.status}
      </div>
    );
  }
}

export default ConnectionStatus;
