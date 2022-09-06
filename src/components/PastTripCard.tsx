import { User } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import { storage } from "../firebaseConfig";
import PlannedTrip from "../models/PlannedTrip";
import SingleDaySchedule from "../models/SingleDaySchedule";
import { getFullItinerary } from "../services/scheduleService";
import "./PastTripCard.css";
import PlannedTripItinerary from "./PlannedTripItinerary";

interface Props {
  trip: PlannedTrip;
}

const PastTripCard = ({ trip }: Props) => {
  const [itinerary, setItinerary] = useState<SingleDaySchedule[]>([]);
  const { user } = useContext(AuthContext);
  const { deleteFullTrip } = useContext(PlannedTripsContext);

  useEffect(() => {
    getFullItinerary(
      trip._id.uid,
      trip._id.date1,
      trip._id.date2,
      trip._id.cityName
    ).then((response) => setItinerary(response));
  }, [trip]);

  const startDate = new Date(trip._id.date1);
  const endDate = new Date(trip._id.date2);

  const fileInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const storageRef = ref(storage, `trip_photos/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
        });
      });
    }
  }

  return (
    <li className="PastTripCard">
      <div className="info-container">
        <img src={trip._id.cityPhoto} />
        <div className="name-date-container">
          <h3>{trip._id.cityName}</h3>
          <h4>
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </h4>
        </div>
      </div>
      <PlannedTripItinerary itinerary={itinerary} />
      <form onSubmit={handleSubmit}>
        <input ref={fileInputRef} type="file" />
        <button>Upload Pics!</button>
      </form>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => deleteFullTrip(trip, user!.uid)}
      ></i>
    </li>
  );
};

export default PastTripCard;
