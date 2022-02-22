import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home.jsx";
import Users from "./Users.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/users" component={Users}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
