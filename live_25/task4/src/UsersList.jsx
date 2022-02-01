import React from "react";
import User from "./User.jsx";

const UsersList = (props) => {
  return (
    <ul className="users">
      {props.users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
