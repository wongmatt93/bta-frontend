import { useContext } from "react";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import PastTripCard from "./PastTripCard";
import "./PastTripsList.css";
import PlannedTripCard from "./PlannedTripCard";

const PastTripsList = () => {
  const { pastTrips } = useContext(PlannedTripsContext);

  return (
    <ul className="PastTripsList">
      {pastTrips.map((trip, index) => (
        <PastTripCard trip={trip} key={index} />
      ))}
    </ul>
  );
};

export default PastTripsList;
