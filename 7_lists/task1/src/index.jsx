import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import NumbersList from "./NumbersList.jsx";

const rootElement = document.querySelector("#root");

const arr = [1, 2, 3, 3];

ReactDOM.render(<NumbersList numbers={arr} />, rootElement);
