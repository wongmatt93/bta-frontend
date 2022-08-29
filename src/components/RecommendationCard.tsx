import RoadGoatCity from "../models/RoadGoatCity";
import "./RecommendationCard.css";

// photo in the card, city name country, rating, budget
// clicking gives details City Details

interface Props {
  name: string;
  info: RoadGoatCity;
  photo: string;
}

const RecommendationCard = ({ name, info, photo }: Props) => {
  console.log(info);
  return (
    <div className="RecommendationCard">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{info.attributes.name}</p>
    </div>
  );
};

export default RecommendationCard;
