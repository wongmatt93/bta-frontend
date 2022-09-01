import { User } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import PlannedTrip from "../models/PlannedTrip";
import { getScheduleByUid } from "../services/scheduleService";
import PlannedTripCard from "./PlannedTripCard";
import "./PlannedTrips.css";

const PlannedTrips = () => {
  const [trips, setTrips] = useState<PlannedTrip[]>([]);
  const { user } = useContext(AuthContext);

  const getAndSetTrips = (user: User) => {
    getScheduleByUid(user.uid).then((response) => setTrips(response));
  };
  useEffect(() => {
    user && getAndSetTrips(user);
  }, [user]);

  return (
    <main className="PlannedTrips">
      <h2>Planned Trips</h2>
      <ul>
        {trips.map((trip, index) => (
          <PlannedTripCard
            trip={trip}
            key={index}
            getAndSetTrips={getAndSetTrips}
          />
        ))}
      </ul>
    </main>
  );
};

export default PlannedTrips;
