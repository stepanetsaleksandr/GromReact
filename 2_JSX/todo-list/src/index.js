// should render following html

// <h1 class="title">Todo List</h1>
import React from "react";
import ReactDOM from "react-dom";
import "./list.css";

const rootElement = document.querySelector("#root");

const element = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
    ;
  </>
);

ReactDOM.render(element, rootElement);
