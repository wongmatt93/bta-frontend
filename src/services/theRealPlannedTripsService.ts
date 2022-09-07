import axios from "axios";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getPlannedTripsByUid = async (
  uid: string
): Promise<TheRealPlannedTrip[]> =>
  (await axios.get(`${baseURL}/planned_trips/${uid}`)).data;

export const addPlannedTrip = async (
  trip: TheRealPlannedTrip
): Promise<TheRealPlannedTrip> =>
  (await axios.post(`${baseURL}/planned_trips`, trip)).data;

export const deleteFullItinerary = async (tripId: string): Promise<void> =>
  (await axios.delete(`${baseURL}/planned_trips/${tripId}`)).data;

export const addPhotos = async (
  tripId: string,
  photo: string
): Promise<string> =>
  (await axios.put(`${baseURL}/planned_trips/${tripId}/photos`, { photo }))
    .data;
