import { useEffect, useState } from "react";
import SingleDaySchedule from "../models/SingleDaySchedule";
import { searchYelpBusiness } from "../services/yelpService";
import "./SingleDayItinerary.css";

interface Props {
  schedule: SingleDaySchedule;
  index: number;
}

const SingleDayItinerary = ({ schedule, index }: Props) => {
  const [breakfastPhoto, setBreakfastPhoto] = useState("");
  return (
    <div className="SingleDayItinerary">
      <h3>Day {index + 1}</h3>
      <p>Breakfast: {schedule.breakfast}</p>
      <img src={schedule.breakfastPhoto} alt="" />
      <p>Event 1: {schedule.event1}</p>
      <img src={schedule.event1Photo} alt="" />
      <p>Lunch: {schedule.lunch}</p>
      <img src={schedule.lunchPhoto} alt="" />
      <p>Event 2: {schedule.event2}</p>
      <img src={schedule.event2Photo} alt="" />
      <p>Dinner: {schedule.dinner}</p>
      <img src={schedule.dinnerPhoto} alt="" />
    </div>
  );
};

export default SingleDayItinerary;
