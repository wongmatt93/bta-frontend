import { useEffect } from "react";
import "./App.css";
import { getCityInfoById } from "./services/roadGoatService";
import { getBusinessesByLocation } from "./services/yelpService";

function App() {
  useEffect(() => {
    getCityInfoById("6588544").then((response) => console.log(response));

    getBusinessesByLocation("nyc").then((response) => {
      console.log(response);
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
