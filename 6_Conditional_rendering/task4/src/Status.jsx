import React from "react";
import Offline from "./Offline.jsx";
import Online from "./Online.jsx";

const Status = ({ isOnline }) => {
  return <div class="status">{isOnline ? <Online /> : <Offline />}</div>;
};

export default Status;
