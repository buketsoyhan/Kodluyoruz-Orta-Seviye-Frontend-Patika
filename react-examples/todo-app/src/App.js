import Header from "./components/Header";
import React, {Component} from "react"
import axios from "axios";

class App extends Component {
  componentDidMount=async()=> { 
    const response= await axios.get(`http://localhost:3000/todos`)
    console.log(response.data);
   }
  render(){
    return (
      <div>
        <Header/>
        <div  className="container">

        </div>
      </div>
    );
  }
}

export default App;
