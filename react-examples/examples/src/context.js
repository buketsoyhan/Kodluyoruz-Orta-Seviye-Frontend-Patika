import React, { Component } from "react";
const UserContext = React.createContext();
export class UserProvider extends Component {
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
        name: "Aslı Aslan",
        salary: "19200",
        department: "Development",
      },
    ],
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
