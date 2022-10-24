import Header from "./components/Header";
import React, { Component } from "react";
import Notes from "./pages/Notes";
import AddUser from "./components/AddUser";
import Dashboard from "./components/Dashboard";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddUser/>
        <Notes />

        {/* <Dashboard/> */}
      </div>
    );
  }
}

export default App;
