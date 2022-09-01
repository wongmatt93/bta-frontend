import { useEffect, useState } from "react";
import PlannedTrip from "../models/PlannedTrip";
import SingleDaySchedule from "../models/SingleDaySchedule";
import { getFullItinerary } from "../services/scheduleService";
import "./PlannedTripCard.css";

interface Props {
  trip: PlannedTrip;
}

const PlannedTripCard = ({ trip }: Props) => {
  const [itinerary, setItinerary] = useState<SingleDaySchedule[]>([]);

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
      {itinerary.map((item, index) => (
        <p key={index}>{item.breakfast}</p>
      ))}
    </li>
  );
};

export default PlannedTripCard;
