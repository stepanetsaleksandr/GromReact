import React from "react";
import ReactDOM from "react-dom";
import Status from "./Status.jsx";
import "./index.scss";

const rootElement = document.querySelector("#root");

ReactDOM.render(<Status isOnline={true} />, rootElement);
