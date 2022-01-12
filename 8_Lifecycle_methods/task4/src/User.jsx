import React, { Component } from "react";

class User extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    this.fetchUser(this.props.userId)
   
  }
  fetchUser=(userId)=>{ fetch(`https://api.github.com/users/${userId}`)
  .then((response) => response.json())
  .then((data) =>
    this.setState({
      user: data,
    })
  );}
  render() {
    const {user}=this.state;
    if (!user) {
      return null;
    }
    const{avatar_url,location,name}=user;
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{name}</span>

          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
