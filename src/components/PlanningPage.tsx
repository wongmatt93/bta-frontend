import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import Business from "../models/Business";
import Hotel from "../models/Hotel";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";
import { getHotelsByCity } from "../services/amadeusService";
import { getCityInfoById } from "../services/roadGoatService";
import {
  searchYelpArts,
  searchYelpBreakfast,
  searchYelpRestaurants,
} from "../services/yelpService";
import "./PlanningPage.css";
import Modal from "react-modal";
import SingleDayItinerary from "./SingleDayItinerary";

Modal.setAppElement("#root");

const PlanningPage = () => {
  const { user, votedOn } = useContext(AuthContext);
  const { addNewTrip } = useContext(PlannedTripsContext);
  const navigate = useNavigate();
  const id: string | undefined = useParams().id;
  const [details, setDetails] = useState<SingleRoadGoatResponse | null>(null);
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [restaurants, setRestaurants] = useState<Business[]>([]);
  const [breakfast, setBreakfast] = useState<Business[]>([]);
  const [events, setEvents] = useState<Business[]>([]);
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [cityPhoto, setCityPhoto] = useState("");
  const [trip, setTrip] = useState<TheRealPlannedTrip | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (id) {
      getCityInfoById(id).then((response) => {
        setDetails(response);
      });
      setCityPhoto(votedOn.find((item) => id === item.cityId)!.photo);
    }
  }, [id]);

  useEffect(() => {
    if (details) {
      getHotelsByCity(
        details.data.attributes.latitude,
        details.data.attributes.longitude
      ).then((response) => setHotels(response.data));
      searchYelpRestaurants(details.data.attributes.name).then((response) =>
        setRestaurants(
          response.businesses.filter((business) => {
            return business.rating < 4;
          })
        )
      );
      searchYelpArts(details.data.attributes.name).then((response) =>
        setEvents(response.businesses)
      );
      searchYelpBreakfast(details.data.attributes.name).then((response) =>
        setBreakfast(
          response.businesses.filter((business) => {
            return business.rating < 4;
          })
        )
      );
    }
  }, [details]);

  useEffect(() => {
    const index: number = Math.floor(Math.random() * hotels.length);
    setHotel(hotels[index]);
  }, [hotels]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const duration =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) + 1;
    const newTrip: TheRealPlannedTrip = {
      date1,
      date2,
      cityName: details!.data.attributes.name,
      uid: user!.uid,
      cityPhoto,
      hotel: duration > 1 ? hotel!.name : null,
      schedule: [],
      photos: [],
    };
    for (let i = 0; i < duration; i++) {
      if (restaurants.length) {
        const index: number = Math.floor(Math.random() * breakfast.length);
        const lunchIndex: number = Math.floor(
          Math.random() * restaurants.length
        );
        const dinnerIndex: number = Math.floor(
          Math.random() * restaurants.length
        );
        const eventOneIndex: number = Math.floor(Math.random() * events.length);
        const eventTwoIndex: number = Math.floor(Math.random() * events.length);
        newTrip.schedule.push({
          breakfast: breakfast[index].name,
          breakfastPhoto: breakfast[index].image_url,
          lunch: restaurants[lunchIndex].name,
          lunchPhoto: restaurants[lunchIndex].image_url,
          dinner: restaurants[dinnerIndex].name,
          dinnerPhoto: restaurants[dinnerIndex].image_url,
          event1: events[eventOneIndex].name,
          event1Photo: events[eventOneIndex].image_url,
          event2: events[eventTwoIndex].name,
          event2Photo: events[eventTwoIndex].image_url,
        });
      }
    }
    setTrip(newTrip);
    addNewTrip(newTrip);
    openModal();
  };

  return (
    <main className="PlanningPage">
      <h2>Please enter the dates for your trip</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="date1">Start Date</label>
        <input
          type="date"
          name="date1"
          id="date1"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />

        <label htmlFor="date2">End Date</label>
        <input
          type="date"
          name="date2"
          id="date2"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />

        <button>Submit</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="planning-page-overlay-modal"
        className="planning-page-modal"
      >
        <h3>Review Your Trip</h3>
        {trip && trip.hotel && <h3>HOTEL - {trip.hotel}</h3>}

        {trip &&
          trip.schedule.map((day, index) => (
            <SingleDayItinerary schedule={day} key={index} index={index} />
          ))}
        <div className="thumbs-container">
          <i
            className="fa-solid fa-thumbs-up thumbs-up"
            onClick={() => navigate("/planned-trips")}
          ></i>
          <i
            className="fa-solid fa-thumbs-up thumbs-down"
            onClick={() => navigate("/planned-trips")}
          ></i>
        </div>
      </Modal>
    </main>
  );
};

export default PlanningPage;
