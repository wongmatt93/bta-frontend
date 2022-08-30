import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      {user ? (
        <nav>
          <ul>
            <Link to="/user-profile">
              <li>User Profile</li>
            </Link>
            <Link to="/recommendations">
              <li>Recommendations</li>
            </Link>
            <Link to="/favorites">
              <li>Favorites</li>
            </Link>
            <Link to="">
              <li>Planned Trips</li>
            </Link>
          </ul>
        </nav>
      ) : (
        <h1>Bad Tripadvisor</h1>
      )}
    </header>
  );
};

export default Header;
