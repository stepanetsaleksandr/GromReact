import React, { useState } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button className="toggle-time-btn" onClick={() => setToggle(!toggle)}>
        {toggle ? "hide" : "show"}
      </button>
      <div className="world-time">
        {toggle && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="New York" offset={-5} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
