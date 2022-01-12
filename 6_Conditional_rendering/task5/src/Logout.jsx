import React from "react";
import Spinner from "./Spinner.jsx";

const Logout = (props) => {
 
  return (
    <button className="logout btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};
export default Logout;
