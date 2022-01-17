import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  state = {
    users: this.props.users,
    filterText: "",
  };

  onChange = (e) => {
    // e.preventDefault();

    this.setState({
      filterText: e.target.value, // передает в стейт введенное значение
    });
  };

  render() {
    let filteredList;
    filteredList = this.state.filterText
      ? this.state.users.filter((user) =>
          user.name.toUpperCase().includes(this.state.filterText.toUpperCase())
        )
      : this.state.users;

    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.filterText}
          count={filteredList.length}
        />
        <ul className="users">
          {filteredList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
