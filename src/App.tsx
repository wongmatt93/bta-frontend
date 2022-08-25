import { useEffect } from "react";
import "./App.css";
import {
  getFlightsToDestination,
  getHotelsByCity,
} from "./services/amadeusService";
import { getCityInfoById } from "./services/roadGoatService";
import { getBusinessesByLocation } from "./services/yelpService";

function App() {
  useEffect(() => {
    getCityInfoById("6588544").then((response) => console.log(response.data));

    getBusinessesByLocation("nyc").then((response) => {
      console.log(response.businesses);
    });

    getFlightsToDestination("DTW", "CDG", "2022-11-01", 1).then((response) => {
      console.log(response.data.data);
    });

    getHotelsByCity("PAR").then((response) => {
      console.log(response.data);
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
