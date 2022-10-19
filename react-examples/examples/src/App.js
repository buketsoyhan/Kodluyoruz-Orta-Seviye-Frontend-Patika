import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import "./App.css";
import AddUser from "./components/AddUser";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User App" />
          <hr />
          <Routes>
            <Route exact path="/" component={Users} />
            <Route exact path="/add" component={AddUser} />
            <Route path="*" component={NotFound} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
