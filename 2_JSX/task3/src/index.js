import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector("#root");

const element = (
  <>
    <h1 class="title">Search Form</h1>
    <div>
      <input type="text" />
      <button>Submit</button>
    </div>
  </>
);

ReactDOM.render(element, rootElement);
