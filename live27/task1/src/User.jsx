import React from "react";
import { useParams } from "react-router-dom";

const User = ({ match }) => {
  const [userData, setUserData] = React.useState({
    avatarUrl: null,
    name: null,
    location: null,
  });

  const { userId: userIdParams } = useParams();

  const { avatarUrl, name, location } = userData;

  const fetchUserInfo = async (userId) => {
    const responce = await fetch(`https://api.github.com/users/${userId}`);
    const userInfo = await responce.json();

    setUserData({
      avatarUrl: userInfo.avatar_url,
      name: userInfo.name,
      location: userInfo.location,
    });
  };

  // запускаем фетч, когда меняется юсер айди
  React.useEffect(() => {
    fetchUserInfo(userIdParams);
  }, [userId]);

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">GitHub</span>
        <span className="user__location">San Francisco,CA</span>
      </div>
    </div>
  );
};
export default User;

// get userId from match
// fetch with userId from
