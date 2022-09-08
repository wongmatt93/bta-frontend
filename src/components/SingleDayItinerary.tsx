import SingleDaySchedule from "../models/SingleDaySchedule";
import "./SingleDayItinerary.css";

interface Props {
  schedule: SingleDaySchedule;
  index: number;
}

const SingleDayItinerary = ({ schedule, index }: Props) => {
  return (
    <div className="SingleDayItinerary">
      <h3>DAY {index + 1}</h3>

      <div className="img-container">
        <p>BREAKFAST - {schedule.breakfast}</p>
        <img src={schedule.breakfastPhoto} alt="" />
      </div>
      <div className="img-container">
        <p>ACTIVITY - {schedule.event1}</p>
        <img src={schedule.event1Photo} alt="" />
      </div>
      <div className="img-container">
        <p>LUNCH - {schedule.lunch}</p>
        <img src={schedule.lunchPhoto} alt="" />
      </div>
      <div className="img-container">
        <p>ACTIVITY - {schedule.event2}</p>
        <img src={schedule.event2Photo} alt="" />
      </div>
      <div className="img-container">
        <p>DINNER - {schedule.dinner}</p>
        <img src={schedule.dinnerPhoto} alt="" />
      </div>
    </div>
  );
};

export default SingleDayItinerary;
