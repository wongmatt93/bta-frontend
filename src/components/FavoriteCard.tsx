import { useNavigate } from "react-router-dom";
import VotedOn from "../models/VotedOn";
import "./FavoriteCard.css";

interface Props {
  favorite: VotedOn;
}

const FavoriteCard = ({ favorite }: Props) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    // navigate(`/recommendations/${info.id}/details`);
  };

  return <li className="FavoriteCard">{favorite.cityName}</li>;
};

export default FavoriteCard;
