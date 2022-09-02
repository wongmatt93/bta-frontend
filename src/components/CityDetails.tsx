import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import VotedOnContext from "../context/VotedOnContext";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";
import {
  getCityInfoById,
  getCityInfoByName,
} from "../services/roadGoatService";
import { getWikiSummary } from "../services/wikipediaService";
import "./CityDetails.css";

interface Props {
  id: string | undefined;
}

const CityDetails = ({ id }: Props) => {
  const { votedOn } = useContext(VotedOnContext);
  const { user } = useContext(AuthContext);
  const { addCityToVotedOn } = useContext(VotedOnContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState<SingleRoadGoatResponse | null>(null);
  const [summary, setSummary] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [knownFor, setKnownFor] = useState<any[]>([]);

  useEffect(() => {
    id &&
      getCityInfoById(id).then((response) => {
        setDetails(response);
      });
  }, [id]);

  useEffect(() => {
    if (details) {
      setName(details.data.attributes.short_name);
      setKnownFor(details.included.filter((item) => item.type === "known_for"));
      getWikiSummary(details.data.attributes.name).then((response) =>
        setSummary(response.extract)
      );
    }
  }, [details]);

  useEffect(() => {
    name &&
      getCityInfoByName(name).then((response) =>
        setPhoto(response.included[0].attributes.image?.full!)
      );
  }, [name]);

  const handleClick = (favorite: boolean): void => {
    addCityToVotedOn({
      cityName: name,
      cityId: id!,
      uid: user!.uid,
      favorite: favorite,
      photo,
    });
    navigate("/recommendations");
  };

  return (
    <div className="CityDetails">
      {details && (
        <>
          <div className="image-container">
            <img
              className="details-img"
              src={photo}
              alt={details.data.attributes.name}
            />
          </div>
          <div className="info-container">
            <div className="name-rating-container">
              {" "}
              <h2>{details.data.attributes.name}</h2>
              <p>{details.data.attributes.average_rating.toFixed(1)}</p>
            </div>
            <p className="summary">{summary}</p>
            <ul>
              {knownFor.map((item, index) => (
                <li key={index}>{item.attributes.name}</li>
              ))}
            </ul>
            {!votedOn.some((item) => {
              return item.cityId === id && item.favorite;
            }) ? (
              <div className="details-thumbs-container">
                <i
                  className="fa-solid fa-thumbs-up thumbs-up"
                  onClick={() => handleClick(true)}
                ></i>
                <i
                  className="fa-solid fa-thumbs-up thumbs-down"
                  onClick={() => handleClick(false)}
                ></i>
              </div>
            ) : (
              <button onClick={() => navigate(`/plan-your-trip/${id}`)}>
                Get Itinerary
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CityDetails;
