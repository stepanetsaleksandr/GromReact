// import React from "react";
// import ReactDOM from "react-dom";
// import "./src/styles.css";

const rootElement = document.querySelector("#root");

const element = (
  <div className="greeting">
    <div className="greeting__title"> Heloo, world! </div>
    <div className="greeting__text"> I'm learning React </div>
  </div>
);

ReactDOM.render(element, rootElement);
