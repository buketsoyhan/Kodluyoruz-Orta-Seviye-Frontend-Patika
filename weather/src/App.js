import "./App.css";
import Card from "./components/Card";
import { WheatherProvider } from "./context/WheatherContext";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("ankara");

  return (
    <div className="App">
      <div className="container d-flex justify-content-end mx-auto ">
        <div className="row">
          <div className="col-12 mt-5">
            <WheatherProvider city={city}>
              <Header city={city} changeCity={setCity} />
              <Card />
            </WheatherProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
