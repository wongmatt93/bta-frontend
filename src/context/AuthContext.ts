import { User } from "firebase/auth";
import { createContext } from "react";
import Preferences from "../models/Preferences";
import UserProfile from "../models/UserProfile";
export interface AuthContextModel {
  user: User | null; // null when not logged in
  profiles: UserProfile[];
  currentUserProfile: UserProfile | undefined;
  preferences: Preferences | null;
  updateUserPreferences: (preferences: Preferences) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profiles: [],
  currentUserProfile: undefined,
  preferences: null,
  updateUserPreferences: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
