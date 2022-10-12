import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import "./App.css";
export default class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Buket Soyhan",
        salary: "15200",
        department: "IT",
      },
      {
        id: 2,
        name: "Batuhan Soyhan",
        salary: "12200",
        department: "Education",
      },
      {
        id: 3,
        name: "Aslhan Aslan",
        salary: "19200",
        department: "Development",
      },
    ],
  };
  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter((user) => id !== user.id),
    });
  };
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}
