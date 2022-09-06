import SingleDaySchedule from "../models/SingleDaySchedule";
import { getFullItinerary } from "../services/scheduleService";
import "./SingleDayItinerary.css";

interface Props {
  schedule: SingleDaySchedule;
  index: number;
}

const SingleDayItinerary = ({ schedule, index }: Props) => {
  return (
    <div className="SingleDayItinerary">
      <h3>DAY {index + 1}</h3>
      <p>BREAKFAST - {schedule.breakfast}</p>
      <div className="img-container">
        <img src={schedule.breakfastPhoto} alt="" />
      </div>
      <p>ACTIVITY - {schedule.event1}</p>
      <div className="img-container">
        <img src={schedule.event1Photo} alt="" />
      </div>
      <p>LUNCH - {schedule.lunch}</p>
      <div className="img-container">
        <img src={schedule.lunchPhoto} alt="" />
      </div>
      <p>ACTIVITY - {schedule.event2}</p>
      <div className="img-container">
        <img src={schedule.event2Photo} alt="" />
      </div>
      <p>DINNER - {schedule.dinner}</p>
      <div className="img-container">
        <img src={schedule.dinnerPhoto} alt="" />
      </div>
    </div>
  );
};

export default SingleDayItinerary;
