import { useContext, useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AuthContext from "../context/AuthContext";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import PlannedTripCard from "./PlannedTripCard";
import "./PlannedTrips.css";
import "animate.css";

const PlannedTrips = () => {
  const { futureTrips, getAndSetTrips } = useContext(PlannedTripsContext);
  const { user } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    user && getAndSetTrips(user.uid);
  }, [user]);

  return (
    <CSSTransition
      in={loaded}
      classNames={{
        enterActive: "animate__animated animate__fadeIn animate_faster",
      }}
      timeout={20000}
    >
      <main className="PlannedTrips">
        <h2>Planned Trips</h2>
        <TransitionGroup component="ul">
          {futureTrips.map((trip) => (
            <CSSTransition
              key={trip._id}
              classNames={{
                enterActive:
                  "animate__animated animate__slideInLeft animate__faster",
                exitActive:
                  "animate__animated animate__slideOutRight animate_faster",
              }}
              timeout={1000}
            >
              <PlannedTripCard trip={trip} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </main>
    </CSSTransition>
  );
};

export default PlannedTrips;
