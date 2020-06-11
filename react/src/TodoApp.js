import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], newTodo: "" };
  }
  render() {
    return [
      <form
        key={1}
        onSubmit={(e) => {
          e.preventDefault();
          const todos = [...this.state.todos, this.state.newTodo];
          this.setState({ todos, newTodo: "" });
        }}
      >
        <input
          type="text"
          autoComplete="off" // don't display dropdown
          placeholder="what needs to be done?"
          value={this.state.newTodo} // always display the newTodo we have so far (i.e., what the user has entered)
          name="newTodo"
          onChange={(e) => {
            // e.target.name is newTodo bc name of input element is newTodo
            // build up this.state.newTodo letter by letter
            this.setState({ [e.target.name]: e.target.value });
          }}
        ></input>
        <button type="submit">Add TODO</button>
      </form>,

      <ol key={2}>
        {this.state.todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ol>,
    ];
  }
}

export default TodoApp;
