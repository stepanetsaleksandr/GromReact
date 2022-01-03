import React from "react";
import moment from "moment";

const getAge = (birthDate) => {
  const age = moment([2007, 0, 29]).fromNow();
  return age;
};

const Greeting = (props) => {
  const element = (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(
        props.birthDate
      )} years old`}
    </div>
  );

  return element;
};

export default Greeting;
