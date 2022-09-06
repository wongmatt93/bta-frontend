import { useNavigate } from "react-router-dom";
import VotedOn from "../models/VotedOn";
import "./FavoriteCard.css";

interface Props {
  favorite: VotedOn;
}

const FavoriteCard = ({ favorite }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/city-details/${favorite!.cityId}/`);
  };

  return (
    <li onClick={handleClick} className="FavoriteCard">
      <img src={favorite.photo} alt={favorite.cityName} />
      <h3>{favorite.cityName}</h3>
    </li>
  );
};

export default FavoriteCard;
