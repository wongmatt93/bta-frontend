import { Link } from "react-router-dom";
import { signOut } from "../firebaseConfig";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <Link to="/preferences">Update Preferences</Link>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default UserProfile;
