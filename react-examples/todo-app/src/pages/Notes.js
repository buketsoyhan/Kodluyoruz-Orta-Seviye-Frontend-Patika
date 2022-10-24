import React, { Component, useState } from "react";
import axios from "axios";

export default class Notes extends Component {
  state = {
    todos: [],
    data: "",
  };
  componentDidMount = async () => {
    const response = await axios.get(`http://localhost:3000/todos`);
    this.setState({
      todos: response.data,
    });
  };

  changeStatus = (e) => {
    
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      data: e.target.value,
    });
    console.log(this.data);
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="container w-50">
        {this.state.todos.length > 0 ? (
          <div>
            <h2>Incompleted Todos</h2>
            {this.state.todos.map((todo) => (
              <ul key={todo.id} className="list-group">
                {!todo.isDone ? (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {todo.body}
                    <input onClick={this.changeStatus} type="checkbox" ></input>
                  </li>
                ) : null}
              </ul>
            ))}
          </div>
        ) : (
          <div>There is nothing todo</div>
        )}
        <div>
        {this.state.todos.length > 0 ? (
          <div>
            <h2>Completed Todos</h2>
            {this.state.todos.map((todo) => (
              <ul key={todo.id} className="list-group">
                {todo.isDone ? (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {todo.body}
                    <input onClick={this.changeStatus} type="checkbox" checked={todo.isDone} ></input>
                  </li>
                ) : null}
              </ul>
            ))}
          </div>
        ) : (
          <div>There is nothing todo</div>
        )}
        </div>
      </div>
    );
  }
}
