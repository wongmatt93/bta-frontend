import { useContext } from "react";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import "./PastTripsList.css";

const PastTripsList = () => {
  const { pastTrips } = useContext(PlannedTripsContext);

  return (
    <ul className="PastTripsList">
      {pastTrips.map((trip) => (
        <li>{trip._id.cityName}</li>
      ))}
    </ul>
  );
};

export default PastTripsList;
