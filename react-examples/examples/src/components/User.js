import React, { Component } from "react";

export default class User extends Component {
  state = {
    isVisible: true,
  };
  onClickEvent(e){
    console.log(this);
  }
  render() {
    //DESTRUCTING
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this)} >{name}</h4>

            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
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
  }
}
