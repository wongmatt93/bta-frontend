import axios from "axios";
import { Preferences } from "../models/Preferences";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getUserPreferencesByUid = async (
  uid: string
): Promise<Preferences> =>
  (await axios.get(`${baseURL}/user_preferences/${uid}`)).data;

export const addUserPreferences = async (
  preferences: Preferences
): Promise<Preferences> =>
  (await axios.post(`${baseURL}/user_preferences/`, preferences)).data;
