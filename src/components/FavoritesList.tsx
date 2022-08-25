import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import "./FavoritesList.css";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(["detroit", "atlanta", "houston"]);
  }, []);

  return (
    <ul className="FavoritesList">
      {favorites.map((favorite, index) => (
        <FavoriteCard key={index} favorite={favorite} />
      ))}
    </ul>
  );
};

export default FavoritesList;
