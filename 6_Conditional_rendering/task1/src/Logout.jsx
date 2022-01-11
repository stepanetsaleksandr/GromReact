import React from "react";

const Logout = (props) => {
 
  return (
    <button className="logout" onClick={props.onLogout}>
      Logout
    </button>
  );
};
export default Logout;
