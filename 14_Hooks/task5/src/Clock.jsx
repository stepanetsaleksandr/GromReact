import React, { useEffect, useState } from "react";
import moment from "moment";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(
    getTimeWithOffset(offset).toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(
      () => setTime(getTimeWithOffset(offset).toLocaleTimeString()),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const currentTime = getTimeWithOffset(offset).toLocaleTimeString();
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{currentTime}</div>
    </div>
  );
};

export default Clock;
