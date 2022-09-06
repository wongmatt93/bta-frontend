import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import "./LandingPage.css";

const LandingPage = () => {
  const { user, currentUserProfile } = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(() => {
    user &&
      currentUserProfile &&
      (currentUserProfile?.preferences
        ? nav("/recommendations")
        : nav("/preferences"));
  }, [currentUserProfile]);

  return (
    <main className="LandingPage">
      <h2>Plan Your Nightmare Vacation</h2>
      <div className="button-p-container">
        <p>You're gunna have a bad time.</p>
        <div className="sign-in-button-container">
          <button className="sign-in-button" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
