import City from "../models/City";
import { useNavigate } from "react-router-dom";
import RoadGoatCity from "../models/RoadGoatCity";
import "./RecommendationCard.css";
import CityDescription from "../models/CityDescriptions";

// photo in the card, city name country, rating, budget
// clicking gives details City Details

interface Props {
  city: CityDescription | null;
}

const RecommendationCard = ({ city }: Props) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/recommendations/${city!.cityName}/details`);
  };

  return (
    <div className="RecommendationCard" onClick={handleClick}>
      {city && (
        <>
          <img src={city.photo} alt={city.cityName} />
          <div className="info-container">
            <div>
              <h3>{city.cityName}</h3>
              <p>
                <i className="fa-solid fa-location-dot"></i>
                {city.country}
              </p>
            </div>
            <p className="rating-text">
              <i className="fa-solid fa-star"></i>
              {city.rating}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendationCard;
