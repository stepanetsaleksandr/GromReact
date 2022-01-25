import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  deleteTask,
  fetchTasksList,
  updateTask,
} from "./tasksGateway";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = () => {
    fetchTasksList().then((data) =>
      this.setState({
        tasks: data,
      })
    );
  };

  onCreate = (text) => {
    const newTask = { text, done: false };
    createTask(newTask).then(() => this.fetchList());
  };

  handleTaskStatusChange = (id, done) => {
    const updatedTask = { done: !done };
    console.log(updatedTask, id);
    updateTask(id, updatedTask).then(() => this.fetchList());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchList());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
