import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import UserProfile from "../models/UserProfile";
import {
  addNewProfile,
  addVotedOnCity,
  getAllProfiles,
} from "../services/userProfileService";
import Preferences from "../models/Preferences";
import { addUpdateUserPreferences } from "../services/userProfileService";
import VotedOn from "../models/VotedOn";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [currentUserProfile, setCurrentUserProfile] = useState<
    UserProfile | undefined
  >(undefined);
  const [preferences, setPreferences] = useState<Preferences | null>(null);
  const [votedOn, setVotedOn] = useState<VotedOn[]>([]);

  const updateUserPreferences = (preferences: Preferences): void => {
    currentUserProfile &&
      addUpdateUserPreferences(currentUserProfile.uid, preferences).then(() =>
        getAllProfiles().then((response) => setProfiles(response))
      );
  };
  const updateUserVotedOn = (uid: string, votedOn: VotedOn): void => {
    currentUserProfile &&
      addVotedOnCity(uid, votedOn).then(() =>
        getAllProfiles().then((response) => setProfiles(response))
      );
  };

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, []);

  useEffect(() => {
    user && getAllProfiles().then((response) => setProfiles(response));
  }, [user]);

  useEffect(() => {
    if (user && profiles) {
      const found: UserProfile | undefined = profiles.find(
        (profile) => profile.uid === user.uid
      );
      if (found) {
        setCurrentUserProfile(found);
      } else {
        const newUser: UserProfile = {
          email: user.email,
          displayName: user.displayName,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          preferences: null,
          votedOn: [],
        };
        addNewProfile(newUser).then(() => setCurrentUserProfile(newUser));
      }
    }
  }, [profiles]);

  useEffect(() => {
    if (currentUserProfile) {
      setPreferences(currentUserProfile.preferences);
      setVotedOn(currentUserProfile.votedOn);
    }
  }, [currentUserProfile]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profiles,
        currentUserProfile,
        preferences,
        votedOn,
        updateUserPreferences,
        updateUserVotedOn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
