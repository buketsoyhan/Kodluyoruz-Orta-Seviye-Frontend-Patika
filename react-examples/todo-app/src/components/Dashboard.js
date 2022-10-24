import React, { useEffect, useState } from "react";
import axios from "axios";
const Dashboard=()=> {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getUser();
    console.log(data);
  }, []);
  const getUser = async () => {
    await axios
      .get("http://localhost:3000/todos")
      .then((res) => setData(res.data));
  };
  const handleDelete = async () => {
    await axios
      .get("http://localhost:3000/todos")
      .then((res) => alert("deleted"));
  };
  return (
    <div className="container w-50">
      <h1>Dashboard</h1>
      <table className="table table-dark table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Todo</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map((todo)=>{
                <tr>
                    <th scope="row">{todo.id}</th>
                    

                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard