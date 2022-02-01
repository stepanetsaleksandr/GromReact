import React from "react";
import Pagination from "./Pagination.jsx";
import UsersList from "./UsersList.jsx";

class App extends React.Component {
  //page number
  //
  state = {
    pageNumber: 1,
  };

  prevBtnHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  nextBtnHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  users = [
    { id: 1, name: "Bob", age: 21 },
    { id: 2, name: "Sam", age: 45 },
    { id: 3, name: "Con", age: 22 },
    { id: 4, name: "Man", age: 55 },
    { id: 5, name: "Boy", age: 55 },
    { id: 6, name: "Her", age: 31 },
    { id: 7, name: "Man", age: 55 },
    { id: 8, name: "Boy", age: 55 },
  ];

  render() {
    const { pageNumber } = this.state;
    const itemsPerPage = 3;

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const usersToRender = this.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          pageNumber={this.state.pageNumber}
          prev={this.prevBtnHandler}
          next={this.nextBtnHandler}
          usersCount={8}
          itemsPerPage={3}
        />
        <UsersList users={usersToRender} />;
      </div>
    );
  }

  //
}
export default App;

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic
