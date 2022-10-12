import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="container">
      <Navbar title="User App"/>
      <User name="Buket Soyhan"
      salary="12000"
      department="Development"
      />
      <User name="Batuhan Soyhan"
      salary="10000"
      department="Education"
      />
    </div>
  );
}

export default App;
