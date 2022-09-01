import { User } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import PlannedTrip from "../models/PlannedTrip";
import SingleDaySchedule from "../models/SingleDaySchedule";
import {
  deleteFullItinerary,
  getFullItinerary,
} from "../services/scheduleService";
import "./PlannedTripCard.css";
import PlannedTripItinerary from "./PlannedTripItinerary";

interface Props {
  trip: PlannedTrip;
  getAndSetTrips: (user: User) => void;
}

const PlannedTripCard = ({ trip, getAndSetTrips }: Props) => {
  const [itinerary, setItinerary] = useState<SingleDaySchedule[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getFullItinerary(
      trip._id.uid,
      trip._id.date1,
      trip._id.date2,
      trip._id.cityName
    ).then((response) => setItinerary(response));
  }, [trip]);

  const handleClick = (trip: PlannedTrip, user: User) => {
    deleteFullItinerary(trip).then(() => getAndSetTrips(user));
  };

  return (
    <li className="PlannedTripCard">
      <h3>{trip._id.cityName}</h3>
      <h4>
        {trip._id.date1} - {trip._id.date2}
      </h4>
      <PlannedTripItinerary itinerary={itinerary} />
      <button onClick={() => handleClick(trip, user!)}>Looks too Nice</button>
    </li>
  );
};

export default PlannedTripCard;
