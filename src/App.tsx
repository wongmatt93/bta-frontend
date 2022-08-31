import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import PreferencesPage from "./components/PreferencesPage";
import RecommendationPage from "./components/RecommendationPage";
import CityDetails from "./components/CityDetails";
import FavoritesPage from "./components/FavoritesPage";
import PlanningPage from "./components/PlanningPage";
import UserProfile from "./components/UserProfile";
import PlannedTrips from "./components/PlannedTrips";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/recommendations" element={<RecommendationPage />} />
          <Route
            path="/recommendations/:id/details"
            element={<CityDetails />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/plan-your-trip/:id" element={<PlanningPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/planned-trips" element={<PlannedTrips />} />
          <Route path="*" element={<Navigate to="/recommendations" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
