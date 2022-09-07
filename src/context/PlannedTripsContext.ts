import { createContext } from "react";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";

interface PlannedTripsContextModel {
  trips: TheRealPlannedTrip[];
  pastTrips: TheRealPlannedTrip[];
  futureTrips: TheRealPlannedTrip[];
  getAndSetTrips: (uid: string) => void;
  addNewTrip: (trip: TheRealPlannedTrip) => void;
  // deleteFullTrip: (trip: PlannedTrip, uid: string) => void;
}

const defaultValues: PlannedTripsContextModel = {
  trips: [],
  pastTrips: [],
  futureTrips: [],
  getAndSetTrips: () => {},
  addNewTrip: () => {},
  // deleteFullTrip: () => {},
};

export const PlannedTripsContext = createContext(defaultValues);
