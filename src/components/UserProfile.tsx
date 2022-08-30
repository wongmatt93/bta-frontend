import { signOut } from "../firebaseConfig";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default UserProfile;
