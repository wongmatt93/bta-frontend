import { useNavigate } from "react-router-dom";
import VotedOn from "../models/VotedOn";
import "./FavoriteCard.css";

interface Props {
  favorite: VotedOn;
}

const FavoriteCard = ({ favorite }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recommendations/${favorite.cityId}/details`);
  };

  return (
    <li onClick={handleClick} className="FavoriteCard">
      <img src={favorite.photo} alt={favorite.cityName} />
      <h3>{favorite.cityName}</h3>
    </li>
  );
};

export default FavoriteCard;

// add a button to remove from favorites
//// after added to favorites, button for plan trip

// plan for tomorrow:
//// nav, itinery
//////// form for picking dates
// database for whole trip planned
