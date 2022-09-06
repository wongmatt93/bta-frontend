import { ReactNode, useContext, useEffect, useState } from "react";
import PlannedTrip from "../models/PlannedTrip";
import {
  deleteFullItinerary,
  getScheduleByUid,
} from "../services/scheduleService";
import AuthContext from "./AuthContext";
import { PlannedTripsContext } from "./PlannedTripsContext";

interface Props {
  children: ReactNode;
}

export const PlannedTripsContextProvider = ({ children }: Props) => {
  const { currentUserProfile } = useContext(AuthContext);
  const [trips, setTrips] = useState<PlannedTrip[]>([]);
  const [pastTrips, setPastTrips] = useState<PlannedTrip[]>([]);
  const [futureTrips, setFutureTrips] = useState<PlannedTrip[]>([]);

  const getAndSetTrips = (uid: string) => {
    getScheduleByUid(uid).then((response) => setTrips(response));
  };

  const deleteFullTrip = (trip: PlannedTrip, uid: string) => {
    deleteFullItinerary(trip).then(() => getAndSetTrips(uid));
  };

  useEffect(() => {
    currentUserProfile && getAndSetTrips(currentUserProfile.uid);
  }, [currentUserProfile]);

  useEffect(() => {
    let today: Date = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = new Date(yyyy + "-" + mm + "-" + dd);

    setPastTrips(
      trips.filter((trip) => {
        const endDate = new Date(trip._id.date2);
        return today.getTime() - endDate.getTime() >= 0;
      })
    );

    setFutureTrips(
      trips.filter((trip) => {
        const endDate = new Date(trip._id.date2);
        return today.getTime() - endDate.getTime() < 0;
      })
    );
  }, [trips]);

  return (
    <PlannedTripsContext.Provider
      value={{ trips, pastTrips, futureTrips, getAndSetTrips, deleteFullTrip }}
    >
      {children}
    </PlannedTripsContext.Provider>
  );
};
