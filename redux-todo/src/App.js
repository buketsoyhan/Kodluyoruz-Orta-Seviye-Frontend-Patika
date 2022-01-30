import './App.css'
import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ToDoList from './components/ToDoList'
import '../src/App.css'
function App() {
  return (
    <div className="container">
      <div className="wrapper">
      <br /><br />
        <Header />
        <br />
        <Form />
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
