import { User } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import PlannedTrip from "../models/PlannedTrip";
import SingleDaySchedule from "../models/SingleDaySchedule";
import { getFullItinerary } from "../services/scheduleService";
import "./PlannedTripCard.css";
import PlannedTripItinerary from "./PlannedTripItinerary";

interface Props {
  trip: PlannedTrip;
}

const PlannedTripCard = ({ trip }: Props) => {
  const [itinerary, setItinerary] = useState<SingleDaySchedule[]>([]);
  const { user } = useContext(AuthContext);
  const { deleteFullTrip } = useContext(PlannedTripsContext);

  useEffect(() => {
    getFullItinerary(
      trip._id.uid,
      trip._id.date1,
      trip._id.date2,
      trip._id.cityName
    ).then((response) => setItinerary(response));
  }, [trip]);

  return (
    <li className="PlannedTripCard">
      <h3>{trip._id.cityName}</h3>
      <h4>
        {trip._id.date1} - {trip._id.date2}
      </h4>
      <PlannedTripItinerary itinerary={itinerary} />
      <button onClick={() => deleteFullTrip(trip, user!.uid)}>
        Looks too Nice
      </button>
    </li>
  );
};

export default PlannedTripCard;
