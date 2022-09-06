import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import PastTripsList from "./PastTripsList";
import "./PastTripsPage.css";

const PastTripsPage = () => {
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
      timeout={20000}
    >
      <main className="PastTripsPage">
        <h2>Your Past Trips</h2>
        <PastTripsList />
      </main>
    </CSSTransition>
  );
};

export default PastTripsPage;
