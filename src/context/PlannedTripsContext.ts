import { createContext } from "react";
import PlannedTrip from "../models/PlannedTrip";

interface PlannedTripsContextModel {
  trips: PlannedTrip[];
  getAndSetTrips: (uid: string) => void;
  deleteFullTrip: (trip: PlannedTrip, uid: string) => void;
}

const defaultValues: PlannedTripsContextModel = {
  trips: [],
  getAndSetTrips: () => {},
  deleteFullTrip: () => {},
};

export const PlannedTripsContext = createContext(defaultValues);
