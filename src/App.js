import React, { Component } from "react";
// import Todo from "./components/Todo";
import "./App.css";
import TodoList from "./components/TodoList";

export default class App extends Component {
  // state = {
  //   name: {
  //     todo: "write an essay",
  //   },
  //   name1: {
  //     todo: "write a blog post",
  //   },
  // };
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}
