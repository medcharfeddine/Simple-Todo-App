import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    todos: [],
    newTodo: "",
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const trimmedInput = this.state.newTodo.trim();
    if (trimmedInput) {
      const todos = [...this.state.todos];
      todos.push({ text: trimmedInput, completed: false });
      this.setState({ todos, newTodo: "" });
    }
  };

  handleDelete = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleComplete = (index) => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
            required
          />
          <button>Add</button>
        </form>
        <div>
          {this.state.todos.map((todo, index) => (
            <div key={index}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => this.handleComplete(index)}>
                Complete
              </button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
