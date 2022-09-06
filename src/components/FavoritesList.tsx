import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import VotedOnContext from "../context/VotedOnContext";
import VotedOn from "../models/VotedOn";
import FavoriteCard from "./FavoriteCard";
import "./FavoritesList.css";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<VotedOn[]>([]);

  const { votedOn } = useContext(AuthContext);

  useEffect(() => {
    setFavorites(votedOn.filter((item) => item.favorite));
    console.log(votedOn);
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
