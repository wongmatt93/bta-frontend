import { User } from "firebase/auth";
import { createContext } from "react";
import Preferences from "../models/Preferences";
import UserProfile from "../models/UserProfile";
import VotedOn from "../models/VotedOn";
export interface AuthContextModel {
  user: User | null; // null when not logged in
  profiles: UserProfile[];
  currentUserProfile: UserProfile | undefined;
  preferences: Preferences | null;
  votedOn: VotedOn[];
  updateUserPreferences: (preferences: Preferences) => void;
  updateUserVotedOn: (uid: string, votedOn: VotedOn) => void;
  updateVotedOnCity: (uid: string, city: string, favorite: boolean) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profiles: [],
  currentUserProfile: undefined,
  preferences: null,
  votedOn: [],
  updateUserPreferences: () => {},
  updateUserVotedOn: () => {},
  updateVotedOnCity: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
