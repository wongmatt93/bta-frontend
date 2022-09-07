import SingleDaySchedule from "./SingleDaySchedule";

export default interface TheRealPlannedTrip {
  _id?: string;
  date1: string;
  date2: string;
  cityName: string;
  uid: string;
  cityPhoto: string;
  hotel: string | null;
  schedule: SingleDaySchedule[];
  photos: string[];
}
