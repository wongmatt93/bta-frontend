import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import VotedOn from "../models/VotedOn";
import FavoriteCard from "./FavoriteCard";
import "./FavoritesList.css";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<VotedOn[]>([]);

  const { votedOn, currentUserProfile, updateVotedOnCity } =
    useContext(AuthContext);

  useEffect(() => {
    setFavorites(votedOn.filter((item) => item.favorite));
  }, [votedOn]);

  return (
    <ul className="FavoritesList">
      {favorites.map((favorite, index) => (
        <FavoriteCard
          key={index}
          favorite={favorite}
          remove={() =>
            updateVotedOnCity(currentUserProfile!.uid, favorite.cityName, false)
          }
        />
      ))}
    </ul>
  );
};

export default FavoritesList;
