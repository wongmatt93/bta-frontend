import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CityDescription from "../models/CityDescriptions";
import { getCityByName } from "../services/cityDescriptionService";
import "./CityDetails.css";

interface Props {
  city: string | undefined;
}

const CityDetails = ({ city }: Props) => {
  const { user, currentUserProfile, votedOn, updateUserVotedOn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState<CityDescription | null>(null);
  const [summary, setSummary] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [knownFor, setKnownFor] = useState<string[]>([]);

  useEffect(() => {
    city &&
      getCityByName(city).then((response) => {
        setDetails(response);
      });
  }, [city]);

  useEffect(() => {
    if (details) {
      setName(city!);
      setKnownFor(details.knownFor);
      setSummary(details.cityDescription);
      setPhoto(details.photo);
    }
  }, [details]);

  const handleClick = (favorite: boolean): void => {
    updateUserVotedOn(user!.uid, {
      cityName: name,
      cityId: details!.cityId,
      uid: user!.uid,
      favorite: favorite,
      photo,
    });
    favorite
      ? navigate(`/city-details/${details!.cityName}`)
      : navigate("/recommendations");
  };

  return (
    <div className="CityDetails">
      {details && currentUserProfile && (
        <>
          <div className="image-container">
            {votedOn.some((item) => {
              return item.cityId === details.cityId && item.favorite;
            }) && (
              <>
                <button
                  onClick={() => navigate(`/plan-your-trip/${details.cityId}`)}
                >
                  Get Itinerary
                </button>
                <div
                  className="back-button-container"
                  onClick={() => navigate(-1)}
                >
                  <i className="fa-solid fa-angles-left"></i>
                  <span>Back</span>
                </div>
              </>
            )}
            <img className="details-img" src={photo} alt={name} />
          </div>
          <div className="info-container">
            <div className="name-rating-container">
              {" "}
              <h2>{name}</h2>
              <p className="rating-text">
                <i className="fa-solid fa-star"></i>
                {details.rating}
              </p>
            </div>
            <p className="summary">{summary}</p>
            {knownFor && (
              <ul>
                {knownFor.map((item, index) => {
                  const known: string = item
                    .replace(
                      /(?:^\w|[A-Z]|\b\w)/g,
                      function (word: string, index: number) {
                        return index === 0
                          ? word.toLowerCase()
                          : word.toUpperCase();
                      }
                    )
                    .replace(/\s+/g, "");
                  return (
                    <li
                      key={index}
                      style={
                        currentUserProfile.preferences![
                          known as keyof typeof currentUserProfile.preferences
                        ]
                          ? { backgroundColor: "#f0b202" }
                          : { backgroundColor: "#ededed" }
                      }
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}

            {!votedOn.some((item) => {
              return item.cityId === details.cityId && item.favorite;
            }) && (
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
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CityDetails;
