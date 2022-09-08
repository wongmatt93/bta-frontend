import { useParams } from "react-router-dom";
import CityDetails from "./CityDetails";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import "./CityDetailsPage.css";
import { useEffect, useState } from "react";

const CityDetailsPage = () => {
  const name: string | undefined = useParams().name;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [name]);

  return (
    <CSSTransition
      in={loaded}
      classNames={{
        enterActive: "animate__animated animate__fadeIn animate_faster",
      }}
      timeout={1000}
    >
      <main className="CityDetailsPage">
        <CityDetails city={name} />
      </main>
    </CSSTransition>
  );
};

export default CityDetailsPage;
