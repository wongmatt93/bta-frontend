import { createContext } from "react";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";

interface PlannedTripsContextModel {
  trips: TheRealPlannedTrip[];
  pastTrips: TheRealPlannedTrip[];
  futureTrips: TheRealPlannedTrip[];
  getAndSetTrips: (uid: string) => void;
  addNewTrip: (trip: TheRealPlannedTrip) => void;
  deleteFullTrip: (tripId: string, uid: string) => void;
  addPhotosToTrip: (tripId: string, photo: string, uid: string) => void;
}

const defaultValues: PlannedTripsContextModel = {
  trips: [],
  pastTrips: [],
  futureTrips: [],
  getAndSetTrips: () => {},
  addNewTrip: () => {},
  deleteFullTrip: () => {},
  addPhotosToTrip: () => {},
};

export const PlannedTripsContext = createContext(defaultValues);
