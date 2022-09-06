import { CSSTransition } from "react-transition-group";
import PreferenceForm from "./PreferenceForm";
import "./PreferencesPage.css";
import "animate.css";
import { useEffect, useState } from "react";

const PreferencesPage = () => {
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
      <main className="PreferencesPage">
        <h2>
          Choose <div>your preferences</div>
        </h2>

        <PreferenceForm />
      </main>
    </CSSTransition>
  );
};

export default PreferencesPage;
