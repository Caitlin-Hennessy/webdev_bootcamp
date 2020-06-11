import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.addTodo(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        ></input>
        <button onClick={this.handleSubmit}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
