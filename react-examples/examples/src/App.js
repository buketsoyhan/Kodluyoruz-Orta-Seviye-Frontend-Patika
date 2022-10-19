import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Users from "./components/Users";
import "./App.css";
import AddUser from "./forms/AddUser";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contribute from "./pages/Contribute";
import UpdateUser from "./forms/UpdateUser";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User App" />
          <hr />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<UpdateUser />} />
            <Route path="/github" element={<Contribute />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
