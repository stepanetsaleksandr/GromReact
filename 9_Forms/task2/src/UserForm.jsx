import React, { Component } from "react";

class UserForm extends Component {
  state = {
    name: "",
    student: false,
    occupation: "London",
    about: "",
  };

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            value={this.state.name}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="checkbox"
            id="student"
            name="student"
            value={this.state.student}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            onChange={this.handleChange}
            className="form-input"
            value={this.state.occupation}
          >
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Sidney">Sidney</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            onChange={this.handleChange}
            value={this.state.about}
          ></textarea>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
