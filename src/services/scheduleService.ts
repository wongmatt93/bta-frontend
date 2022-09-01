import axios from "axios";
import PlannedTrip from "../models/PlannedTrip";
import SingleDaySchedule from "../models/SingleDaySchedule";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getScheduleByUid = async (uid: string): Promise<PlannedTrip[]> =>
  (await axios.get(`${baseURL}/schedule/${uid}`)).data;

export const getFullItinerary = async (
  uid: string,
  date1: string,
  date2: string,
  cityName: string
): Promise<SingleDaySchedule[]> =>
  (await axios.get(`${baseURL}/schedule/${uid}/${date1}/${date2}/${cityName}`))
    .data;

export const addSchedule = async (
  schedule: SingleDaySchedule
): Promise<SingleDaySchedule> =>
  (await axios.post(`${baseURL}/schedule`, schedule)).data;

export const deleteFullItinerary = async (
  itinerary: PlannedTrip
): Promise<void> =>
  (
    await axios.delete(
      `${baseURL}/schedule/${itinerary._id.uid}/${itinerary._id.date1}/${itinerary._id.date2}/${itinerary._id.cityName}`
    )
  ).data;
