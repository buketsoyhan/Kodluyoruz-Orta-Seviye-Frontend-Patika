import Header from "./components/Header";
import React, { Component } from "react";
import Notes from "./pages/Notes";
import AddUser from "./components/AddUser";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddUser />
        <Notes />
      </div>
    );
  }
}

export default App;
