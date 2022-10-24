import axios from "axios";
import React, { useState } from "react";

function AddUser() {
  const [formData, setformData] = useState({
    body: "",
    isDone: false,
  });
  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:3000/todos", formData);
    e.preventDefault();
    setformData({
      body: "",
      isDone: false,
    });
    if (response) alert("data submit succesfully");
  };
  return (
    <div className="container w-50">
      <div className="row ">
        <div className="col-md-7 d-flex justify-content-between">

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="add..."
              onChange={(e) =>
                setformData({ ...formData, body: e.target.value })
              }
              value={formData.body}
            />
          </div>
          <button onClick={handleFormSubmit} className="btn btn-success mb-4">
            Add Todo
          </button>
        </div>
      </div>

      {/* <form>
        <div className="">
          <input type="text" className="form-control" placeholder="Add a todo"/>
          <div className="input-group-append">
            <button onClick={this.handleSubmit} className="btn btn-outline-secondary" type="button">Add</button>
          </div>
        </div>
        </form> */}
    </div>
  );
}

export default AddUser;
