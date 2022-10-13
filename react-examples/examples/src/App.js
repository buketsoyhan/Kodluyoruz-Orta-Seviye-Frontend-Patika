import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import "./App.css";
import AddUser from "./components/AddUser";
export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <AddUser/>
        <Users />
      </div>
    );
  }
}
