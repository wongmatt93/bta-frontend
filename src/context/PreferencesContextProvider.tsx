import { ReactNode, useContext, useEffect, useState } from "react";
import { Preferences } from "../models/Preferences";
import {
  addUserPreferences,
  getUserPreferencesByUid,
} from "../services/userPreferencesService";
import AuthContext from "./AuthContext";
import PreferencesContext from "./PreferencesContext";

interface Props {
  children: ReactNode;
}

const PreferencesContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  const getAndSetPreferences = (uid: string): void => {
    getUserPreferencesByUid(uid).then((response) => setPreferences(response));
  };

  const addPreferences = (uid: string, preference: Preferences): void => {
    addUserPreferences(preference).then(() => {
      getAndSetPreferences(uid);
    });
  };

  useEffect(() => {
    user && getAndSetPreferences(user.uid);
  }, [user]);

  return (
    <PreferencesContext.Provider value={{ preferences, addPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;
