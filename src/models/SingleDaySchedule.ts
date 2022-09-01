export default interface SingleDaySchedule {
  _id?: string;
  breakfast: string;
  breakfastPhoto: string;
  lunch: string;
  lunchPhoto: string;
  dinner: string;
  dinnerPhoto: string;
  event1: string;
  event1Photo: string;
  event2: string;
  event2Photo: string;
  hotel?: string | null;
  date1: string;
  date2: string;
  uid: string;
  cityName: string;
}
