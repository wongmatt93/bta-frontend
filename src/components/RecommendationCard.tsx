import City from "../models/City";
import { useNavigate } from "react-router-dom";
import RoadGoatCity from "../models/RoadGoatCity";
import "./RecommendationCard.css";

// photo in the card, city name country, rating, budget
// clicking gives details City Details

interface Props {
  city: City;
  info: RoadGoatCity;
  photo: string;
}

const RecommendationCard = ({ city, info, photo }: Props) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/recommendations/${info.id}/details`);
  };

  return (
    <div className="RecommendationCard" onClick={handleClick}>
      <img src={photo} alt={city.name} />
      <div className="info-container">
        <div>
          <h3>{city.name}</h3>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            {city.country}
          </p>
        </div>
        <p className="rating-text">
          <i className="fa-solid fa-star"></i>
          {info.attributes.average_rating.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default RecommendationCard;
