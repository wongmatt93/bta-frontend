import { useEffect, useState } from "react";
import { City } from "../models/City";
import RoadGoatCity from "../models/RoadGoatCity";
import { getCitiesByCountry } from "../services/cityService";
import { getCityInfoByName } from "../services/roadGoatService";
import "./RecommendationPage.css";

const RecommendationPage = () => {
  const [photo, setPhoto] = useState("");
  const [cityInfo, setCityInfo] = useState<RoadGoatCity | null>(null);
  const [city, setCity] = useState<City | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const swipedCities: City[] = [];

  const getAndSetCities = (country: string): Promise<void> =>
    getCitiesByCountry(country).then((response) => {
      setCities(
        response.filter((item) => {
          return !swipedCities.some((swiped) => {
            return swiped.name === item.name;
          });
        })
      );
    });

  useEffect(() => {
    getAndSetCities("US");
  }, []);

  useEffect(() => {
    const index: number = Math.floor(Math.random() * cities.length);
    setCity(cities[index]);
  }, [cities]);

  useEffect(() => {
    city &&
      getCityInfoByName(city.name).then((response) => {
        if (response.data[0] === undefined) {
          getAndSetCities("US");
        } else if (response.data[0].attributes.destination_type === "State") {
          setCityInfo(response.data[1]);
          setPhoto(response.included[1].attributes.image!.full);
        } else {
          setCityInfo(response.data[0]);
          setPhoto(response.included[0].attributes.image!.full);
        }
      });
  }, [city]);

  return (
    <div className="RecommendationPage">
      {city && cityInfo && (
        <>
          <img src={photo} alt={city.name} />
          <h2>{city.name}</h2>
          <p>Rating: {cityInfo.attributes.average_rating}</p>
          <button>Upvote</button>
          <button>Downvote</button>
        </>
      )}
    </div>
  );
};

export default RecommendationPage;
