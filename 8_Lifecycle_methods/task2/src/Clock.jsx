import React, { Component } from "react";
import moment from "moment";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const date = new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
  return moment(date).format("h:mm:ss A");
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: props.offset,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">
          {`${getTimeWithOffset(this.state.time)}`}
        </div>
      </div>
    );
  }
}
export default Clock;
