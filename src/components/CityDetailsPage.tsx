import { useParams } from "react-router-dom";
import CityDetails from "./CityDetails";
import "./CityDetailsPage.css";

const CityDetailsPage = () => {
  const id: string | undefined = useParams().id;

  return (
    <main className="CityDetailsPage">
      <CityDetails id={id} />
    </main>
  );
};

export default CityDetailsPage;
