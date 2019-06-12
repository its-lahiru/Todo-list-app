import React, { Component } from "react";

export class AddTodo extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="title" placeholder="Add Todo ..." />
        </form>
      </div>
    );
  }
}

export default AddTodo;
