import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Preferences from "../models/Preferences";
import "./PreferenceForm.css";

const PreferenceForm = () => {
  const { preferences, updateUserPreferences } = useContext(AuthContext);
  const navigate = useNavigate();

  const [charming, setCharming] = useState(false);
  const [foodie, setFoodie] = useState(false);
  const [nightlife, setNightlife] = useState(false);
  const [architecture, setArchitecture] = useState(false);
  const [history, setHistory] = useState(false);
  const [museums, setMuseums] = useState(false);
  const [performingArts, setPerformingArts] = useState(false);
  const [music, setMusic] = useState(false);
  const [hipster, setHipster] = useState(false);
  const [hippie, setHippie] = useState(false);
  const [posh, setPosh] = useState(false);
  const [familyFriendly, setFamilyFriendly] = useState(false);
  const [lGBTScene, setLgbtScene] = useState(false);
  const [diversity, setDiversity] = useState(false);
  const [beachTown, setBeachTown] = useState(false);
  const [collegeTown, setCollegeTown] = useState(false);
  const [skiTown, setSkiTown] = useState(false);
  const [outdoorsy, setOutdoorsy] = useState(false);
  const [wineries, setWineries] = useState(false);
  const [shopping, setShopping] = useState(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const newPreference: Preferences = {
      charming,
      foodie,
      nightlife,
      architecture,
      history,
      museums,
      performingArts,
      music,
      hipster,
      hippie,
      posh,
      familyFriendly,
      lGBTScene,
      diversity,
      beachTown,
      collegeTown,
      skiTown,
      outdoorsy,
      wineries,
      shopping,
    };
    updateUserPreferences(newPreference);
    !preferences && navigate("/recommendations");
  };

  useEffect(() => {
    if (preferences) {
      setCharming(preferences.charming);
      setFoodie(preferences.foodie);
      setNightlife(preferences.nightlife);
      setArchitecture(preferences.architecture);
      setHistory(preferences.history);
      setMuseums(preferences.museums);
      setPerformingArts(preferences.performingArts);
      setMusic(preferences.music);
      setHipster(preferences.hipster);
      setHippie(preferences.hippie);
      setPosh(preferences.posh);
      setFamilyFriendly(preferences.familyFriendly);
      setLgbtScene(preferences.lGBTScene);
      setDiversity(preferences.diversity);
      setBeachTown(preferences.beachTown);
      setCollegeTown(preferences.collegeTown);
      setSkiTown(preferences.skiTown);
      setOutdoorsy(preferences.outdoorsy);
      setWineries(preferences.wineries);
      setShopping(preferences.shopping);
    }
  }, [preferences]);

  return (
    <form className="PreferenceForm" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="checkbox"
          name="charming"
          id="charming"
          checked={charming}
          onChange={(e) => setCharming(e.target.checked)}
        />
        <label htmlFor="charming">
          <div>
            <i className="fa-solid fa-heart"></i>
          </div>
          Charming
        </label>

        <input
          type="checkbox"
          name="foodie"
          id="foodie"
          checked={foodie}
          onChange={(e) => setFoodie(e.target.checked)}
        />
        <label htmlFor="foodie">
          <div>
            <i className="fa-solid fa-bowl-food"></i>
          </div>
          Foodie
        </label>

        <input
          type="checkbox"
          name="nightLife"
          id="nightLife"
          checked={nightlife}
          onChange={(e) => setNightlife(e.target.checked)}
        />
        <label htmlFor="nightLife">
          <div>
            <i className="fa-solid fa-martini-glass-citrus"></i>
          </div>
          Nightlife
        </label>

        <input
          type="checkbox"
          name="architecture"
          id="architecture"
          checked={architecture}
          onChange={(e) => setArchitecture(e.target.checked)}
        />
        <label htmlFor="architecture">
          <div>
            <i className="fa-solid fa-torii-gate"></i>
          </div>
          Architecture
        </label>

        <input
          type="checkbox"
          name="history"
          id="history"
          checked={history}
          onChange={(e) => setHistory(e.target.checked)}
        />
        <label htmlFor="history">
          <div>
            {" "}
            <i className="fa-solid fa-chess-rook"></i>
          </div>
          History
        </label>

        <input
          type="checkbox"
          name="museums"
          id="museums"
          checked={museums}
          onChange={(e) => setMuseums(e.target.checked)}
        />
        <label htmlFor="museums">
          <div>
            <i className="fa-solid fa-building-columns"></i>
          </div>{" "}
          Museums
        </label>

        <input
          type="checkbox"
          name="performingArts"
          id="performingArts"
          checked={performingArts}
          onChange={(e) => setPerformingArts(e.target.checked)}
        />
        <label htmlFor="performingArts">
          <div>
            <i className="fa-solid fa-masks-theater"></i>
          </div>
          Performing Arts
        </label>

        <input
          type="checkbox"
          name="music"
          id="music"
          checked={music}
          onChange={(e) => setMusic(e.target.checked)}
        />
        <label htmlFor="music">
          <div>
            <i className="fa-solid fa-music"></i>
          </div>
          Music
        </label>

        <input
          type="checkbox"
          name="hipster"
          id="hipster"
          checked={hipster}
          onChange={(e) => setHipster(e.target.checked)}
        />
        <label htmlFor="hipster">
          <div>
            <i className="fa-solid fa-glasses"></i>
          </div>
          Hipster
        </label>

        <input
          type="checkbox"
          name="hippie"
          id="hippie"
          checked={hippie}
          onChange={(e) => setHippie(e.target.checked)}
        />
        <label htmlFor="hippie">
          <div>
            <i className="fa-solid fa-peace"></i>
          </div>
          Hippie
        </label>

        <input
          type="checkbox"
          name="posh"
          id="posh"
          checked={posh}
          onChange={(e) => setPosh(e.target.checked)}
        />
        <label htmlFor="posh">
          <div>
            <i className="fa-solid fa-gem"></i>
          </div>
          Posh
        </label>

        <input
          type="checkbox"
          name="familyFriendly"
          id="familyFriendly"
          checked={familyFriendly}
          onChange={(e) => setFamilyFriendly(e.target.checked)}
        />
        <label htmlFor="familyFriendly">
          <div>
            <i className="fa-solid fa-baby"></i>
          </div>
          Family Friendly
        </label>

        <input
          type="checkbox"
          name="lgbtScene"
          id="lgbtScene"
          checked={lGBTScene}
          onChange={(e) => setLgbtScene(e.target.checked)}
        />
        <label htmlFor="lgbtScene">
          <div>
            <i className="fa-solid fa-rainbow"></i>
          </div>
          LGBT Scene
        </label>

        <input
          type="checkbox"
          name="diversity"
          id="diversity"
          checked={diversity}
          onChange={(e) => setDiversity(e.target.checked)}
        />
        <label htmlFor="diversity">
          <div>
            <i className="fa-solid fa-people-group"></i>
          </div>
          Diversity
        </label>

        <input
          type="checkbox"
          name="beachTown"
          id="beachTown"
          checked={beachTown}
          onChange={(e) => setBeachTown(e.target.checked)}
        />
        <label htmlFor="beachTown">
          <div>
            <i className="fa-solid fa-umbrella-beach"></i>
          </div>
          Beach Town
        </label>

        <input
          type="checkbox"
          name="collegeTown"
          id="collegeTown"
          checked={collegeTown}
          onChange={(e) => setCollegeTown(e.target.checked)}
        />
        <label htmlFor="collegeTown">
          <div>
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          College Town
        </label>

        <input
          type="checkbox"
          name="skiTown"
          id="skiTown"
          checked={skiTown}
          onChange={(e) => setSkiTown(e.target.checked)}
        />
        <label htmlFor="skiTown">
          <div>
            <i className="fa-solid fa-person-skiing"></i>
          </div>
          Ski Town
        </label>

        <input
          type="checkbox"
          name="outdoorsy"
          id="outdoorsy"
          checked={outdoorsy}
          onChange={(e) => setOutdoorsy(e.target.checked)}
        />
        <label htmlFor="outdoorsy">
          <div>
            <i className="fa-solid fa-tree"></i>
          </div>
          Outdoorsy
        </label>

        <input
          type="checkbox"
          name="wineries"
          id="wineries"
          checked={wineries}
          onChange={(e) => setWineries(e.target.checked)}
        />
        <label htmlFor="wineries">
          <div>
            <i className="fa-solid fa-wine-glass"></i>
          </div>
          Wineries
        </label>

        <input
          type="checkbox"
          name="shopping"
          id="shopping"
          checked={shopping}
          onChange={(e) => setShopping(e.target.checked)}
        />
        <label htmlFor="shopping">
          <div>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          Shopping
        </label>
      </div>
      {preferences ? (
        <button>Update Preferences</button>
      ) : (
        <button>Continue</button>
      )}
    </form>
  );
};

export default PreferenceForm;
