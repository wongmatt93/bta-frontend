import FavoritesList from "./FavoritesList";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import "./FavoritesPage.css";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <CSSTransition
      in={loaded}
      classNames={{
        enterActive: "animate__animated animate__fadeIn animate_faster",
      }}
      timeout={1000}
    >
      <main className="FavoritesPage">
        <h2>Select a city to begin.</h2>
        <i className="fa-solid fa-angle-down"></i>
        <FavoritesList />
      </main>
    </CSSTransition>
  );
};

export default FavoritesPage;
