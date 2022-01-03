import React from 'react';
import UserAvatar from './Avatar.jsx';

const UserInfo = props => {
  return (
    <div className="user-info">
      <UserAvatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
