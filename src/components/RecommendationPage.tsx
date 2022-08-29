import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import VotedOnContext from "../context/VotedOnContext";
import { City } from "../models/City";
import RoadGoatCity from "../models/RoadGoatCity";
import { getCitiesByCountry } from "../services/cityService";
import { getCityInfoByName } from "../services/roadGoatService";
import RecommendationCard from "./RecommendationCard";
import "./RecommendationPage.css";

const RecommendationPage = () => {
  const { user } = useContext(AuthContext);
  const { votedOn, addCityToVotedOn } = useContext(VotedOnContext);
  const [photo, setPhoto] = useState("");
  const [cityInfo, setCityInfo] = useState<RoadGoatCity | null>(null);
  const [city, setCity] = useState<City | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  const getAndSetCities = (country: string): Promise<void> =>
    getCitiesByCountry(country).then((response) => {
      setCities(
        response.filter((item) => {
          return !votedOn.some((voted) => {
            return voted.cityName === item.name;
          });
        })
      );
    });

  useEffect(() => {
    getAndSetCities("US");
  }, [votedOn]);

  useEffect(() => {
    const index: number = Math.floor(Math.random() * cities.length);
    setCity(cities[index]);
  }, [cities]);

  useEffect(() => {
    city &&
      getCityInfoByName(city.name).then((response) => {
        if (response.data[0] === undefined) {
          addCityToVotedOn({
            cityName: city.name,
            uid: user!.uid,
            favorite: false,
          });
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
          <RecommendationCard name={city.name} info={cityInfo} photo={photo} />
          <button
            onClick={() =>
              addCityToVotedOn({
                cityName: city.name,
                uid: user!.uid,
                favorite: true,
              })
            }
          >
            Upvote
          </button>
          <button
            onClick={() =>
              addCityToVotedOn({
                cityName: city.name,
                uid: user!.uid,
                favorite: false,
              })
            }
          >
            Downvote
          </button>
        </>
      )}
    </div>
  );
};

export default RecommendationPage;
