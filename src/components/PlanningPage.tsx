import userEvent from "@testing-library/user-event";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Business from "../models/Business";
import Hotel from "../models/Hotel";
import PlannedTrip from "../models/PlannedTrip";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";
import { getHotelsByCity } from "../services/amadeusService";
import { getCityInfoById } from "../services/roadGoatService";
import { addSchedule, getScheduleByUid } from "../services/scheduleService";
import { searchYelp } from "../services/yelpService";
import "./PlanningPage.css";

const PlanningPage = () => {
  const { user } = useContext(AuthContext);
  const id: string | undefined = useParams().id;
  const [details, setDetails] = useState<SingleRoadGoatResponse | null>(null);
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [restaurants, setRestaurants] = useState<Business[]>([]);
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
      searchYelp(details.data.attributes.name).then((response) =>
        setRestaurants(response.businesses)
      );
    }
  }, [details]);

  useEffect(() => {
    const index: number = Math.floor(Math.random() * hotels.length);
    setHotel(hotels[index]);
  }, [hotels]);

  // const [breakfast, setBreakfast] = useState()
  // const [lunch, setLunch] = useState()
  // const [dinner, setDinner] = useState()

  // get number of days
  // find one breakfast, one lunch, one dinner per day
  // find two events per day

  // form that gets number of days
  // loop for number of days
  //    yelp to find one breakfast
  //    yelp to find one lunch
  //    yelp to find one dinner
  //    yelp to find two events

  // for (let i = 0; i < parseInt(days); i++) {
  //   const breakfastIndex: number = Math.floor(
  //     Math.random() * restaurants.length
  //   );
  //   const breakfast = restaurants[breakfastIndex];
  //   const lunchIndex: number = Math.floor(Math.random() * restaurants.length);
  //   const lunch = restaurants[lunchIndex];
  //   const dinnerIndex: number = Math.floor(Math.random() * restaurants.length);
  //   const dinner = restaurants[dinnerIndex];
  //   const eventIndex1: number = Math.floor(Math.random() * restaurants.length);
  //   const event1 = restaurants[eventIndex1];
  //   const eventIndex2: number = Math.floor(Math.random() * restaurants.length);
  //   const event2 = restaurants[eventIndex2];
  // }

  // let newDate1: any;
  // let newDate2: any;
  // useEffect(() => {
  //   newDate1 = new Date(date1);
  //   newDate2 = new Date(date2);
  // }, [date1, date2]);

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
          const index: number = Math.floor(Math.random() * restaurants.length);
          const lunchIndex: number = Math.floor(
            Math.random() * restaurants.length
          );
          const dinnerIndex: number = Math.floor(
            Math.random() * restaurants.length
          );
          addSchedule({
            breakfast: restaurants[index].name,
            lunch: restaurants[lunchIndex].name,
            dinner: restaurants[dinnerIndex].name,
            event1: restaurants[index].name,
            event2: restaurants[index].name,
            date1,
            date2,
            uid: user!.uid,
            cityName: details!.data.attributes.name,
          });
          alert(`${restaurants[index].name}`);
        }
      }
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
