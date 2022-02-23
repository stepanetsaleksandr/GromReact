import React from "react";
import { useParams } from "react-router-dom";

const User = ({ match }) => {
  const [userData, setUserData] = React.useState({
    avatarUrl: null,
    name: null,
    location: null,
  });

  const { userId } = useParams();

  const { avatarUrl, name, location } = userData;

  const fetchUserInfo = (userId) => {
    return fetch(`https://api.github.com/users/${userId}`)
      .then((responce) => responce.json())
      .then((userInfo) => {
        setUserData({
          avatarUrl: userInfo.avatar_url,
          name: userInfo.name,
          location: userInfo.location,
        });
      });
  };

  React.useEffect(() => {
    console.log(userId);
    fetchUserInfo(match.params.userId);
  }, []);

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
