import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import PlannedTrip from "../models/PlannedTrip";
import { getScheduleByUid } from "../services/scheduleService";
import PlannedTripCard from "./PlannedTripCard";
import "./PlannedTrips.css";

const PlannedTrips = () => {
  const [trips, setTrips] = useState<PlannedTrip[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    user && getScheduleByUid(user.uid).then((response) => setTrips(response));
  }, [user]);

  return (
    <main className="PlannedTrips">
      <h2>Planned Trips</h2>
      <ul>
        {trips.map((trip) => (
          <PlannedTripCard trip={trip} />
        ))}
      </ul>
    </main>
  );
};

export default PlannedTrips;
