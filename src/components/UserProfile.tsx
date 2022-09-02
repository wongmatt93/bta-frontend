import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const nav = useNavigate();

  // const handleClick = () => {
  //   signOut();
  //   nav("/");
  // };

  useEffect(() => {
    !user && nav("/");
  }, [user]);

  return (
    <main className="UserProfile">
      {user && (
        <>
          <img src={user.photoURL!} alt="profile-pic" />
          <h2>{user.displayName}</h2>
          <nav>
            <ul>
              <Link to="/preferences">
                <li>Update Preferences</li>
              </Link>
            </ul>
          </nav>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </main>
  );
};

export default UserProfile;
