import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import CloseButton from "react-bootstrap/CloseButton";

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

  changeStatus = async (e) => {
    const tempId = e.currentTarget.id;
    const body = e.target.value;
    axios({
      method: "put",
      url: "http://localhost:3000/todos/" + tempId,
      data: {
        id: tempId,
        body: body,
        isDone: true,
      },
    });
    window.location.reload()
  };

  rechangeStatus = async (e) => {
    const tempId = e.currentTarget.id;
    const body = e.target.value;
    axios({
      method: "put",
      url: "http://localhost:3000/todos/" + tempId,
      data: {
        id: tempId,
        body: body,
        isDone: false,
      },
    });
    window.location.reload()
  };
  deleteData = async (e) => {
    const tempId = e.currentTarget.id;

    axios.delete(`http://localhost:3000/todos/${tempId}`).then((res) => {
      console.log(res);
      console.log(res.data);
      const todos = this.state.todos.filter((item) => item.tempId !== tempId);
      this.setState({ todos });
    });
    window.location.reload()
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
                {!todo.isDone && todo.isDone === false ? (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {todo.body}
                    <div>
                      <input
                        id={todo.id}
                        value={todo.body}
                        onClick={this.changeStatus}
                        type="checkbox"
                      ></input>
                      <CloseButton
                        id={todo.id}
                        onClick={this.deleteData}
                        className="ml-2"
                        variant="black"
                      >
                        x
                      </CloseButton>
                    </div>
                  </li>
                ) : null}
              </ul>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        <div>
          {this.state.todos.length > 0 ? (
            <div>
              <h2>Completed Todos</h2>
              {this.state.todos.map((todo) => (
                <ul key={todo.id} className="list-group">
                  {todo.isDone && todo.isDone === true ? (
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      {todo.body}
                      <div>
                        <input
                          id={todo.id}
                          onClick={this.rechangeStatus}
                          type="checkbox"
                          value={todo.body}
                          defaultChecked={true}
                        ></input>
                        <CloseButton
                          id={todo.id}
                          onClick={this.deleteData }
                          className="ml-2"
                          variant="black"
                        >
                          x
                        </CloseButton>
                      </div>
                    </li>
                  ) : null}
                </ul>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
