import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const onToggleStatus = (e) => {
      setStatus(e.type);
    };

    window.addEventListener("online", onToggleStatus);
    window.addEventListener("offline", onToggleStatus);

    return () => {
      window.removeEventListener("online", onToggleStatus);
      window.removeEventListener("offline", onToggleStatus);
    };
  }, []);

  const changeStatus = status === "offline" ? "status_offline" : "";

  return <div className={`status ${changeStatus}`}>{status}</div>;
};

export default ConnectionStatus;
