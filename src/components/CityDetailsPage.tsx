import { useParams } from "react-router-dom";
import CityDetails from "./CityDetails";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import "./CityDetailsPage.css";
import { useEffect, useState } from "react";

const CityDetailsPage = () => {
  const id: string | undefined = useParams().id;
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
      <main className="CityDetailsPage">
        <CityDetails id={id} />
      </main>
    </CSSTransition>
  );
};

export default CityDetailsPage;
