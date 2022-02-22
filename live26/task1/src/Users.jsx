import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import User from "./User";

class Users extends React.Component {
  render() {
    const { match } = this.props;

    return (
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
        <Switch>
          <Route path={`${match.path}/:userId`} component={User} />
          <Route path={match.path}>
            <span>Select a user please</span>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Users;
