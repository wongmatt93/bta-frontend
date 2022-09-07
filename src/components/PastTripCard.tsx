import { User } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FormEvent, useContext, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import { storage } from "../firebaseConfig";
import SingleDaySchedule from "../models/SingleDaySchedule";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";
import "./PastTripCard.css";
import PlannedTripItinerary from "./PlannedTripItinerary";

interface Props {
  trip: TheRealPlannedTrip;
}

const PastTripCard = ({ trip }: Props) => {
  const { deleteFullTrip, addPhotosToTrip } = useContext(PlannedTripsContext);

  const startDate = new Date(trip.date1);
  const endDate = new Date(trip.date2);

  const fileInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const storageRef = ref(storage, `trip_photos/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          addPhotosToTrip(trip._id!, url, trip.uid);
        });
      });
    }
  }

  return (
    <li className="PastTripCard">
      <div className="info-container">
        <img src={trip.cityPhoto} />
        <div className="name-date-container">
          <h3>{trip.cityName}</h3>
          <h4>
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </h4>
        </div>
      </div>
      <PlannedTripItinerary itinerary={trip.schedule} />
      <form onSubmit={handleSubmit}>
        <input ref={fileInputRef} type="file" />
        <button>Upload Pics!</button>
      </form>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => deleteFullTrip(trip._id!, trip.uid)}
      ></i>
    </li>
  );
};

export default PastTripCard;
