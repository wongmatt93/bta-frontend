import { useContext, useEffect, useState } from "react";
import VotedOnContext from "../context/VotedOnContext";
import VotedOn from "../models/VotedOn";
import FavoriteCard from "./FavoriteCard";
import "./FavoritesList.css";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<VotedOn[]>([]);

  const { votedOn } = useContext(VotedOnContext);

  useEffect(() => {
    setFavorites(votedOn.filter((item) => item.favorite));
  }, [votedOn]);

  return (
    <ul className="FavoritesList">
      {favorites.map((favorite, index) => (
        <FavoriteCard key={index} favorite={favorite} />
      ))}
    </ul>
  );
};

export default FavoritesList;
