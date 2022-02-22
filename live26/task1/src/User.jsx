import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  state = {
    avatarUrl: null,
    name: null,
    location: null,
  };
  componentDidMount() {
    this.fetchUserInfo(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.fetchUserInfo(this.props.match.params.userId);
    }
  }
  fetchUserInfo = (userId) => {
    return fetch(`https://api.github.com/users/${userId}`)
      .then((responce) => responce.json())
      .then((userInfo) => {
        this.setState({
          avatarUrl: userInfo.avatar_url,
          name: userInfo.name,
          location: userInfo.location,
        });
      });
  };

  render() {
    const { avatarUrl, name, location } = this.state;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">GitHub</span>
          <span className="user__location">San Francisco,CA</span>
        </div>
      </div>
    );
  }
}

export default User;

// get userId from match
// fetch with userId from
