import { useContext } from "react";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";
import "./PastTripCard.css";
import PlannedTripItinerary from "./PlannedTripItinerary";
import { useNavigate } from "react-router-dom";

interface Props {
  trip: TheRealPlannedTrip;
}

const PastTripCard = ({ trip }: Props) => {
  const { deleteFullTrip } = useContext(PlannedTripsContext);
  const nav = useNavigate();

  const startDate = new Date(trip.date1);
  const endDate = new Date(trip.date2);

  return (
    <li className="PastTripCard">
      <div className="info-container">
        <img src={trip.cityPhoto} />
        <div className="name-date-container">
          <h3>{trip.cityName}</h3>
          <h4>
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </h4>
        </div>
      </div>
      <div className="button-container">
        <PlannedTripItinerary itinerary={trip.schedule} hotel={trip.hotel} />

        <button
          onClick={() => nav(`/gallery/${trip._id}`)}
          className="gallery-nav-button"
        >
          Gallery
        </button>
      </div>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => deleteFullTrip(trip._id!, trip.uid)}
      ></i>
    </li>
  );
};

export default PastTripCard;
