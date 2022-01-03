import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment.jsx";
import "./styles.scss";

const userInfo = {
  name: "Tom",
  avatarUrl: "https://avatars1.githubusercontent.com",
};

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Comment author={userInfo} text="Good job!" date={new Date()} />,
  rootElement
);
