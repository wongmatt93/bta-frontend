import { createContext } from "react";
import PlannedTrip from "../models/PlannedTrip";

interface PlannedTripsContextModel {
  trips: PlannedTrip[];
  pastTrips: PlannedTrip[];
  futureTrips: PlannedTrip[];
  getAndSetTrips: (uid: string) => void;
  deleteFullTrip: (trip: PlannedTrip, uid: string) => void;
}

const defaultValues: PlannedTripsContextModel = {
  trips: [],
  pastTrips: [],
  futureTrips: [],
  getAndSetTrips: () => {},
  deleteFullTrip: () => {},
};

export const PlannedTripsContext = createContext(defaultValues);
