import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import City from "../models/City";
import RoadGoatCity from "../models/RoadGoatCity";
import { getCitiesByCountry } from "../services/cityService";
import {
  getCityInfoById,
  getCityInfoByName,
} from "../services/roadGoatService";
import CityDetails from "./CityDetails";
import RecommendationCard from "./RecommendationCard";
import "./RecommendationPage.css";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import {
  getAllCityDescriptions,
  getCityByName,
} from "../services/cityDescriptionService";
import CityDescription from "../models/CityDescriptions";

const RecommendationPage = () => {
  const { user, votedOn, updateUserVotedOn } = useContext(AuthContext);
  const [cityInfo, setCityInfo] = useState<CityDescription | null>(null);
  const [city, setCity] = useState<CityDescription | null>(null);
  const [cities, setCities] = useState<CityDescription[]>([]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [cityLoaded, setCityLoaded] = useState(false);

  const getAndSetCities = (): Promise<void> =>
    getAllCityDescriptions().then((response) => {
      setCities(
        response.filter(
          (item) => !votedOn.some((voted) => voted.cityName === item.cityName)
        )
      );
    });

  const handleClick = (favorite: boolean): void => {
    updateUserVotedOn(user!.uid, {
      cityName: city!.cityName,
      cityId: cityInfo!.cityId,
      uid: user!.uid,
      favorite: favorite,
      photo: cityInfo!.photo,
    });
    setCityLoaded(false);
  };

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    getAndSetCities();
  }, [votedOn]);

  useEffect(() => {
    const index: number = Math.floor(Math.random() * cities.length);
    setCity(cities[index]);
  }, [cities]);

  useEffect(() => {
    city &&
      getCityByName(city.cityName).then((response) => {
        setCityInfo(response);
      });
    setCityLoaded(true);
  }, [city]);

  return (
    <main className="RecommendationPage">
      {cityInfo &&
        (cities.length > 0 ? (
          <>
            <h2>Recommendations</h2>
            <div className="mobile-view">
              <CSSTransition
                in={cityLoaded}
                classNames={{
                  enterActive:
                    "animate__animated animate__fadeIn animate__slower",
                  exitActive:
                    "animate__animated animate__fadeOut animate__slower",
                }}
                timeout={2000}
              >
                <RecommendationCard city={cityInfo} />
              </CSSTransition>
              <div className="thumbs-container">
                <i
                  className="fa-solid fa-thumbs-up thumbs-up"
                  onClick={() => handleClick(true)}
                ></i>
                <i
                  className="fa-solid fa-thumbs-up thumbs-down"
                  onClick={() => handleClick(false)}
                ></i>
              </div>
            </div>
            <CityDetails city={cityInfo.cityName} />
          </>
        ) : (
          <h2 className="out-text">You're out of cities!</h2>
        ))}
    </main>
  );
};

export default RecommendationPage;
