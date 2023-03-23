import React, { Component } from "react";
// import List from "./TodoList";

export default class Todo extends Component {
  addTodo = () => {
    React.createElement("div");
  };

  render() {
    return (
      <div>
        <div className="card">
          <h1>To Do App</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo"
          />
          <button className="btn btn-primary" onClick={() => this.addTodo}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
