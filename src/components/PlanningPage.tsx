import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Business from "../models/Business";
import Hotel from "../models/Hotel";
import PlannedTrip from "../models/PlannedTrip";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";
import { getHotelsByCity } from "../services/amadeusService";
import { getCityInfoById } from "../services/roadGoatService";
import { addSchedule, getScheduleByUid } from "../services/scheduleService";
import {
  searchYelpArts,
  searchYelpBreakfast,
  searchYelpRestaurants,
} from "../services/yelpService";
import "./PlanningPage.css";

const PlanningPage = () => {
  const { user } = useContext(AuthContext);
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

  useEffect(() => {
    id &&
      getCityInfoById(id).then((response) => {
        setDetails(response);
      });
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

  const [trips, setTrips] = useState<PlannedTrip[]>([]);

  useEffect(() => {
    user && getScheduleByUid(user.uid).then((response) => setTrips(response));
  }, [user]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (
      !trips.some(
        (trip) =>
          trip._id.cityName === details!.data.attributes.name &&
          trip._id.date1 === date1 &&
          trip._id.date2 === date2 &&
          trip._id.uid === user!.uid
      )
    ) {
      const startDate = new Date(date1);
      const endDate = new Date(date2);
      const duration =
        (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) + 1;
      for (let i = 0; i < duration; i++) {
        if (restaurants.length) {
          const index: number = Math.floor(Math.random() * breakfast.length);
          const lunchIndex: number = Math.floor(
            Math.random() * restaurants.length
          );
          const dinnerIndex: number = Math.floor(
            Math.random() * restaurants.length
          );

          const eventOneIndex: number = Math.floor(
            Math.random() * events.length
          );
          const eventTwoIndex: number = Math.floor(
            Math.random() * events.length
          );
          addSchedule({
            breakfast: breakfast[index].name,
            lunch: restaurants[lunchIndex].name,
            dinner: restaurants[dinnerIndex].name,
            event1: events[eventOneIndex].name,
            event2: events[eventTwoIndex].name,
            hotel: duration > 1 ? hotel!.name : null,
            date1,
            date2,
            uid: user!.uid,
            cityName: details!.data.attributes.name,
          });
          alert(`Day ${i + 1}
          Breakfast: ${breakfast[index].name}
          Event 1: ${events[eventOneIndex].name}
          Lunch: ${restaurants[lunchIndex].name}
          Event 2: ${events[eventTwoIndex].name}
          Dinner: ${restaurants[dinnerIndex].name}
          `);
        }
      }
      navigate("/planned-trips");
    } else {
      alert("error");
    }
  };

  return (
    <main className="PlanningPage">
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
      <h3>Your Hotel: {hotel?.name}</h3>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>{restaurant.name}</div>
      ))}
    </main>
  );
};

export default PlanningPage;
