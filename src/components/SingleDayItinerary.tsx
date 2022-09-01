import SingleDaySchedule from "../models/SingleDaySchedule";
import "./SingleDayItinerary.css";

interface Props {
  schedule: SingleDaySchedule;
  index: number;
}

const SingleDayItinerary = ({ schedule, index }: Props) => {
  return (
    <div className="SingleDayItinerary">
      <h3>Day {index + 1}</h3>
      <p>Breakfast: {schedule.breakfast}</p>
      <p>Event 1: {schedule.event1}</p>
      <p>Lunch: {schedule.lunch}</p>
      <p>Event 2: {schedule.event2}</p>
      <p>Dinner: {schedule.dinner}</p>
    </div>
  );
};

export default SingleDayItinerary;
