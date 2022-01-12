import React from "react";

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num, i) => (
        <li key={i}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
