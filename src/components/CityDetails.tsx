import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import VotedOnContext from "../context/VotedOnContext";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";
import {
  getCityInfoById,
  getCityInfoByName,
} from "../services/roadGoatService";
import "./CityDetails.css";

// photo, rating, description, vote function, known for, extra information, don't do and food

const CityDetails = () => {
  const id: string | undefined = useParams().id;
  const { user } = useContext(AuthContext);
  const { addCityToVotedOn } = useContext(VotedOnContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState<SingleRoadGoatResponse | null>(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [knownFor, setKnownFor] = useState<any[]>([]);

  useEffect(() => {
    id &&
      getCityInfoById(id).then((response) => {
        setDetails(response);
        console.log(response);
      });
  }, [id]);

  useEffect(() => {
    if (details) {
      setName(details.data.attributes.short_name);
      setKnownFor(details.included.filter((item) => item.type === "known_for"));
    }
  }, [details]);

  useEffect(() => {
    name &&
      getCityInfoByName(name).then((response) =>
        setPhoto(response.included[0].attributes.image?.full!)
      );
  });

  const handleClick = (favorite: boolean): void => {
    addCityToVotedOn({
      cityName: name,
      cityId: id!,
      uid: user!.uid,
      favorite: favorite,
    });
    navigate("/recommendations");
  };

  return (
    <div className="CityDetails">
      {details && (
        <>
          <img src={photo} alt={details.data.attributes.name} />
          <h2>{details.data.attributes.name}</h2>
          <p>{details.data.attributes.average_rating.toFixed(1)}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            natus adipisci repellat quos ad nulla minima harum quisquam
            perspiciatis vitae, recusandae quam dolor corporis provident
            maiores? Tenetur obcaecati nam voluptas.
          </p>
          <ul>
            {knownFor.map((item, index) => (
              <li key={index}>
                <p>{item.attributes.name}</p>
              </li>
            ))}
          </ul>
          <button onClick={() => handleClick(true)}>Upvote</button>
          <button onClick={() => handleClick(false)}>Downvote</button>
        </>
      )}
    </div>
  );
};

export default CityDetails;
