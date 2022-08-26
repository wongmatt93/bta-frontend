import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Header">
      {user && <button onClick={signOut}>Log Out</button>}
    </div>
  );
};

export default Header;
