import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hotel from "../models/Hotel";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";
import { getHotelsByCity } from "../services/amadeusService";
import { getCityInfoById } from "../services/roadGoatService";
import "./PlanningPage.css";

const PlanningPage = () => {
  const id: string | undefined = useParams().id;
  const [details, setDetails] = useState<SingleRoadGoatResponse | null>(null);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    id &&
      getCityInfoById(id).then((response) => {
        setDetails(response);
      });
  }, [id]);

  useEffect(() => {
    details &&
      getHotelsByCity(
        details.data.attributes.latitude,
        details.data.attributes.longitude
      ).then((response) => {
        return console.log(response.data);
      });
  }, [details]);

  useEffect(() => {
    console.log(hotels);
  }, [hotels]);

  return (
    <main className="PlanningPage">
      {hotels.map((hotel) => (
        <div>{hotel.name}</div>
      ))}
    </main>
  );
};

export default PlanningPage;
