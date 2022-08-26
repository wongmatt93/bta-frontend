import { createContext } from "react";
import { Preferences } from "../models/Preferences";

export interface PreferencesContextModel {
  preferences: Preferences | null;
  addPreferences: (uid: string, preference: Preferences) => void;
}

const defaultValue: PreferencesContextModel = {
  preferences: null,
  addPreferences: () => {},
};

const PreferencesContext = createContext(defaultValue);
export default PreferencesContext;
