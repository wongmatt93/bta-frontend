import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      {user ? (
        <nav>
          <ul>
            <Link to="/user-profile">
              <li className="user-container">
                <i className="fa-solid fa-circle-user"></i>
                <span>Hello, {user.displayName}</span>
              </li>
            </Link>
            <div className="right-nav-container">
              <Link to="/recommendations">
                <li>
                  <i className="fa-solid fa-earth-americas"></i>
                </li>
              </Link>
              <Link to="/favorites">
                <li>
                  <i className="fa-solid fa-heart"></i>
                </li>
              </Link>
              <Link to="/planned-trips">
                <li>
                  <i className="fa-solid fa-suitcase"></i>
                </li>
              </Link>
            </div>
          </ul>
        </nav>
      ) : (
        <h1>Bad Tripadvisor</h1>
      )}
    </header>
  );
};

export default Header;
