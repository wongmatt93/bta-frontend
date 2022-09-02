import { User } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import PlannedTrip from "../models/PlannedTrip";
import { getScheduleByUid } from "../services/scheduleService";
import PlannedTripCard from "./PlannedTripCard";
import "./PlannedTrips.css";

const PlannedTrips = () => {
  const { trips, getAndSetTrips } = useContext(PlannedTripsContext);
  const { user } = useContext(AuthContext);

  // const getAndSetTrips = (user: User) => {
  //   getScheduleByUid(user.uid).then((response) => setTrips(response));
  // };
  useEffect(() => {
    user && getAndSetTrips(user.uid);
  }, [user]);

  return (
    <main className="PlannedTrips">
      <h2>Planned Trips</h2>
      <ul>
        {trips.map((trip, index) => (
          <PlannedTripCard trip={trip} key={index} />
        ))}
      </ul>
    </main>
  );
};

export default PlannedTrips;
