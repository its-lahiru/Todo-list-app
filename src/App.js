import React from "react";
import Todos from "./components/todo/Todos";
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Title one",
        completed: false
      },
      {
        id: 2,
        title: "Title two",
        completed: false
      },
      {
        id: 3,
        title: "Title three",
        completed: false
      }
    ]
  };

  // Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
