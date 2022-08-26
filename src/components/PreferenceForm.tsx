import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import PreferencesContext from "../context/PreferencesContext";
import { Preferences } from "../models/Preferences";
import "./PreferenceForm.css";

const PreferenceForm = () => {
  const { user } = useContext(AuthContext);
  const { addPreferences } = useContext(PreferencesContext);

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
  const [lgbtScene, setLgbtScene] = useState(false);
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
      uid: user!.uid,
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
      lgbtScene,
      diversity,
      beachTown,
      collegeTown,
      skiTown,
      outdoorsy,
      wineries,
      shopping,
    };
    addPreferences(user!.uid, newPreference);
  };

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
          <div>❤️</div>Charming
        </label>

        <input
          type="checkbox"
          name="foodie"
          id="foodie"
          checked={foodie}
          onChange={(e) => setFoodie(e.target.checked)}
        />
        <label htmlFor="foodie">
          <div>🍣</div>Foodie
        </label>

        <input
          type="checkbox"
          name="nightLife"
          id="nightLife"
          checked={nightlife}
          onChange={(e) => setNightlife(e.target.checked)}
        />
        <label htmlFor="nightLife">
          <div>🧉</div>Nightlife
        </label>

        <input
          type="checkbox"
          name="architecture"
          id="architecture"
          checked={architecture}
          onChange={(e) => setArchitecture(e.target.checked)}
        />
        <label htmlFor="architecture">Architecture</label>

        <input
          type="checkbox"
          name="history"
          id="history"
          checked={history}
          onChange={(e) => setHistory(e.target.checked)}
        />
        <label htmlFor="history">
          <div>🏺</div>History
        </label>

        <input
          type="checkbox"
          name="museums"
          id="museums"
          checked={museums}
          onChange={(e) => setMuseums(e.target.checked)}
        />
        <label htmlFor="museums">
          <div>🏛️</div> Museums
        </label>

        <input
          type="checkbox"
          name="performingArts"
          id="performingArts"
          checked={performingArts}
          onChange={(e) => setPerformingArts(e.target.checked)}
        />
        <label htmlFor="performingArts">Performing Arts</label>

        <input
          type="checkbox"
          name="music"
          id="music"
          checked={music}
          onChange={(e) => setMusic(e.target.checked)}
        />
        <label htmlFor="music">Music</label>

        <input
          type="checkbox"
          name="hipster"
          id="hipster"
          checked={hipster}
          onChange={(e) => setHipster(e.target.checked)}
        />
        <label htmlFor="hipster">Hipster</label>

        <input
          type="checkbox"
          name="hippie"
          id="hippie"
          checked={hippie}
          onChange={(e) => setHippie(e.target.checked)}
        />
        <label htmlFor="hippie">Hippie</label>

        <input
          type="checkbox"
          name="posh"
          id="posh"
          checked={posh}
          onChange={(e) => setPosh(e.target.checked)}
        />
        <label htmlFor="posh">Posh</label>

        <input
          type="checkbox"
          name="familyFriendly"
          id="familyFriendly"
          checked={familyFriendly}
          onChange={(e) => setFamilyFriendly(e.target.checked)}
        />
        <label htmlFor="familyFriendly">Family Friendly</label>

        <input
          type="checkbox"
          name="lgbtScene"
          id="lgbtScene"
          checked={lgbtScene}
          onChange={(e) => setLgbtScene(e.target.checked)}
        />
        <label htmlFor="lgbtScene">LGBT Scene</label>

        <input
          type="checkbox"
          name="diversity"
          id="diversity"
          checked={diversity}
          onChange={(e) => setDiversity(e.target.checked)}
        />
        <label htmlFor="diversity">Diversity</label>

        <input
          type="checkbox"
          name="beachTown"
          id="beachTown"
          checked={beachTown}
          onChange={(e) => setBeachTown(e.target.checked)}
        />
        <label htmlFor="beachTown">Beach Town</label>

        <input
          type="checkbox"
          name="collegeTown"
          id="collegeTown"
          checked={collegeTown}
          onChange={(e) => setCollegeTown(e.target.checked)}
        />
        <label htmlFor="collegeTown">College Town</label>

        <input
          type="checkbox"
          name="skiTown"
          id="skiTown"
          checked={skiTown}
          onChange={(e) => setSkiTown(e.target.checked)}
        />
        <label htmlFor="skiTown">Ski Town</label>

        <input
          type="checkbox"
          name="outdoorsy"
          id="outdoorsy"
          checked={outdoorsy}
          onChange={(e) => setOutdoorsy(e.target.checked)}
        />
        <label htmlFor="outdoorsy">Outdoorsy</label>

        <input
          type="checkbox"
          name="wineries"
          id="wineries"
          checked={wineries}
          onChange={(e) => setWineries(e.target.checked)}
        />
        <label htmlFor="wineries">Wineries</label>

        <input
          type="checkbox"
          name="shopping"
          id="shopping"
          checked={shopping}
          onChange={(e) => setShopping(e.target.checked)}
        />
        <label htmlFor="shopping">Shopping</label>
      </div>
      <button>Continue</button>
    </form>
  );
};

export default PreferenceForm;
