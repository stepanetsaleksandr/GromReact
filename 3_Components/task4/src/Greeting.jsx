import React from "react";
import moment from "moment";

const Greeting = (props) => {
  const element = (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${moment(
        props.birthDate
      ).fromNow(true)} old`}
    </div>
  );

  return element;
};

export default Greeting;
