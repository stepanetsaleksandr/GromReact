import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";
import "./index.scss";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Greeting
    firstName={"John"}
    lastName={"Doe"}
    birthDate={new Date(1986, 11, 1)}
  />,
  rootElement
);
