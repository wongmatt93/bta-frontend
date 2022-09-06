import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    !user && nav("/");
  }, [user]);

  return (
    <CSSTransition
      in={loaded}
      classNames={{
        enterActive: "animate__animated animate__fadeIn animate_faster",
      }}
      timeout={1000}
    >
      <main className="UserProfile">
        {user && (
          <>
            <img src={user.photoURL!} alt="profile-pic" />
            <h2>{user.displayName}</h2>
            <nav>
              <ul>
                <Link to="/preferences">
                  <li className="bordered-li">
                    <span>Update Preferences </span>
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                </Link>
                <Link to="/past-trips">
                  <li>
                    <span>See Past Trips</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                </Link>
              </ul>
            </nav>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </main>
    </CSSTransition>
  );
};

export default UserProfile;
