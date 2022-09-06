import { useContext } from "react";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import "./PastTripsList.css";
import PlannedTripCard from "./PlannedTripCard";

const PastTripsList = () => {
  const { pastTrips } = useContext(PlannedTripsContext);

  return (
    <ul className="PastTripsList">
      {pastTrips.map((trip, index) => (
        <PlannedTripCard trip={trip} key={index} />
      ))}
    </ul>
  );
};

export default PastTripsList;
