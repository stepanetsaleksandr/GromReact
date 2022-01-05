class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: props.offset,
    };
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">New York</div>
        <div className="clock__time">7:00:51 AM</div>
      </div>
    );
  }
}

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

//put your code here
