const rootElement = document.querySelector("#root");

// const greetingElem = document.createElement("div");
// greetingElem.classList.add("greeting");
// greetingElem.textContent = "Hello, React!";
// rootElement.append(greetingElem);

const greetingElem = React.createElement(
  "div",
  {
    class: "greeting",
  },
  "Hello, React!"
);

ReactDOM.render(greetingElem, rootElement);
