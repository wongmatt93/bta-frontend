import { useContext } from "react";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";
import "./PlannedTripCard.css";
import PlannedTripItinerary from "./PlannedTripItinerary";

interface Props {
  trip: TheRealPlannedTrip;
}

const PlannedTripCard = ({ trip }: Props) => {
  const { deleteFullTrip } = useContext(PlannedTripsContext);

  const startDate = new Date(trip.date1);
  const endDate = new Date(trip.date2);

  return (
    <li className="PlannedTripCard">
      <div className="info-container">
        <img src={trip.cityPhoto} />
        <div className="name-date-container">
          <h3>{trip.cityName}</h3>
          <h4>
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </h4>
        </div>
      </div>
      <PlannedTripItinerary itinerary={trip.schedule} hotel={trip.hotel} />
      <i
        className="fa-solid fa-trash-can"
        onClick={() => deleteFullTrip(trip._id!, trip.uid)}
      ></i>
    </li>
  );
};

export default PlannedTripCard;
