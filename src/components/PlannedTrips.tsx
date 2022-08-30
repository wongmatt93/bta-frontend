import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import PlannedTrip from "../models/PlannedTrip";
import { getScheduleByUid } from "../services/scheduleService";
import "./PlannedTrips.css";

const PlannedTrips = () => {
  const [trips, setTrips] = useState<PlannedTrip[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    user && getScheduleByUid(user.uid).then((response) => setTrips(response));
  }, [user]);

  return (
    <main className="PlannedTrips">
      {trips.map((trip) => (
        <h3>{trip._id.cityName}</h3>
      ))}
    </main>
  );
};

export default PlannedTrips;
