import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Business from "../models/Business";
import Hotel from "../models/Hotel";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";
import { getHotelsByCity } from "../services/amadeusService";
import { getCityInfoById } from "../services/roadGoatService";
import { searchYelp } from "../services/yelpService";
import "./PlanningPage.css";

const PlanningPage = () => {
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

  // interface schedule {
  //   _id?: string;
  //   breakfast: string;
  //   lunch: string;
  //   dinner: string;
  //   event1: string;
  //   event2: string;
  //   hotel?: string;
  //   dates: string;
  //   uid: string;
  //   cityName: string;
  // }

  // useEffect(() => {
  //   console.log(hotels);
  // }, [hotels]);

  // let newDate1: any;
  // let newDate2: any;
  // useEffect(() => {
  //   newDate1 = new Date(date1);
  //   newDate2 = new Date(date2);
  // }, [date1, date2]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <main className="PlanningPage">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="days1">How many days?</label>
        <input
          type="date"
          name="days1"
          id="days1"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />
        <label htmlFor="days2">How many days?</label>
        <input
          type="date"
          name="days2"
          id="days2"
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
