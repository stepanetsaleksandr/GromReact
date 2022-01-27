import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import User from "./User.jsx";

const App = () => {
  return (
    <div className="page">
      <Router>
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/users/:userId" element={<User />}></Route>
            <Route path="" element="<span>Select a user please</span>"></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
