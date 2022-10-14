import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios"

export default class User extends Component {
  state = {
    isVisible: false,
  };
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  onDeleteUser = async(dispatch, e) => {
    const { id } = this.props;
    await axios.delete(`http://localhost:3000/users/${id}`)

    dispatch({ type: "DELETE_USER", payload: id });
  };
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    //DESTRUCTING
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#62848d", color: "white" }
                    : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline" onClick={this.onClickEvent}>
                    {name}
                  </h4>

                  <i
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Maaş : {salary}</p>
                    <p className="card-text">Department : {department}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
