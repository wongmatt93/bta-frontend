import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

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
