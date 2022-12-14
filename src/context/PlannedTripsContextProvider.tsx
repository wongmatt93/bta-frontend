import { ReactNode, useContext, useEffect, useState } from "react";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";
import {
  addPhotos,
  addPlannedTrip,
  deleteFullItinerary,
  getPlannedTripsByUid,
} from "../services/theRealPlannedTripsService";
import AuthContext from "./AuthContext";
import { PlannedTripsContext } from "./PlannedTripsContext";

interface Props {
  children: ReactNode;
}

export const PlannedTripsContextProvider = ({ children }: Props) => {
  const { currentUserProfile } = useContext(AuthContext);
  const [trips, setTrips] = useState<TheRealPlannedTrip[]>([]);
  const [pastTrips, setPastTrips] = useState<TheRealPlannedTrip[]>([]);
  const [futureTrips, setFutureTrips] = useState<TheRealPlannedTrip[]>([]);

  const getAndSetTrips = (uid: string): void => {
    getPlannedTripsByUid(uid).then((response) => setTrips(response));
  };

  const addNewTrip = (trip: TheRealPlannedTrip): void => {
    addPlannedTrip(trip).then(() => getAndSetTrips(trip.uid));
  };

  useEffect(() => {
    currentUserProfile && getAndSetTrips(currentUserProfile.uid);
  }, [currentUserProfile]);

  const deleteFullTrip = (tripId: string, uid: string) => {
    deleteFullItinerary(tripId).then(() => getAndSetTrips(uid));
  };

  const addPhotosToTrip = (tripId: string, photo: string, uid: string) => {
    addPhotos(tripId, photo).then(() => getAndSetTrips(uid));
  };

  useEffect(() => {
    let today: Date = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = new Date(yyyy + "-" + mm + "-" + dd);

    setPastTrips(
      trips.filter((trip) => {
        const endDate = new Date(trip.date2);
        return today.getTime() - endDate.getTime() >= 0;
      })
    );

    setFutureTrips(
      trips.filter((trip) => {
        const endDate = new Date(trip.date2);
        return today.getTime() - endDate.getTime() < 0;
      })
    );
  }, [trips]);

  return (
    <PlannedTripsContext.Provider
      value={{
        trips,
        pastTrips,
        futureTrips,
        getAndSetTrips,
        addNewTrip,
        deleteFullTrip,
        addPhotosToTrip,
      }}
    >
      {children}
    </PlannedTripsContext.Provider>
  );
};
