import { ReactNode, useState } from "react";
import PlannedTrip from "../models/PlannedTrip";
import {
  deleteFullItinerary,
  getScheduleByUid,
} from "../services/scheduleService";
import { PlannedTripsContext } from "./PlannedTripsContext";

interface Props {
  children: ReactNode;
}

export const PlannedTripsContextProvider = ({ children }: Props) => {
  const [trips, setTrips] = useState<PlannedTrip[]>([]);

  const getAndSetTrips = (uid: string) => {
    getScheduleByUid(uid).then((response) => setTrips(response));
  };

  const deleteFullTrip = (trip: PlannedTrip, uid: string) => {
    deleteFullItinerary(trip).then(() => getAndSetTrips(uid));
  };

  return (
    <PlannedTripsContext.Provider
      value={{ trips, getAndSetTrips, deleteFullTrip }}
    >
      {children}
    </PlannedTripsContext.Provider>
  );
};
