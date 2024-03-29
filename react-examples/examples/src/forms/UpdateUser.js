import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";

export default class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
    error: false,
  };
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount = async () => {
    //const {id} = this.props.match.params
    // console.log("iddd", id);
    const { id } = this.props;

    console.log("çekçekidçek", id);
    console.log("çekçekidçek22", {id});

    const response = await axios.get(`http://localhost:3000/users/`);
    const found = response.data.find((element) => {
      return element.id === 1;
    });
    console.log(found);
    const { name, salary, department } = found;
    this.setState({
      name,
      salary,
      department,
    });
  };
  validateForm = () => {
    const { name, salary, department } = this.state;
    if (name === "" || salary === "" || department === "") return false;
    else return true;
  };
  updateUser = async (dispatch, e) => {
    e.preventDefault();
    const { name, salary, department } = this.state;
    const { id } = this.props;

    const updatedUser = {
      name,
      salary,
      department,
    };

    if (!this.validateForm()) {
      this.setState({
        error: true,
      });
      return;
    }
    await axios.delete(`http://localhost:3000/users/${id}`);
    const response = await axios.put(
      `http://localhost:3000/users/${id}`,
      updatedUser
    );

    dispatch({ type: "UPDATE_USER", payload: response.data });

    this.props.history.push("/");
  };

  render() {
    const { name, salary, department, error } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>Update User Form</h4>
                </div>
                <div className="card-body">
                  {error ? (
                    <div className="alert alert-danger">
                      Lütfen bilgilerinizi kontrol edin.
                    </div>
                  ) : null}
                  <form onSubmit={this.updateUser.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        className="form-control"
                        value={name}
                        onChange={this.changeInput}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        type="text"
                        name="department"
                        id="department"
                        placeholder="Enter Department"
                        className="form-control"
                        value={department}
                        onChange={this.changeInput}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="salary">Salary</label>
                      <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder="Enter Salary"
                        className="form-control"
                        value={salary}
                        onChange={this.changeInput}
                      />
                    </div>
                    <button
                      className="btn btn-success w-100 mt-3"
                      type="submit"
                    >
                      Update User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
