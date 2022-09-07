import axios from "axios";
import Preferences from "../models/Preferences";
import UserProfile from "../models/UserProfile";
import VotedOn from "../models/VotedOn";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getAllProfiles = async (): Promise<UserProfile[]> =>
  (await axios.get(`${baseURL}/user_profiles`)).data;

export const getProfileByUid = async (uid: string): Promise<UserProfile> =>
  (await axios.get(`${baseURL}/user_profiles/${uid}`)).data;

export const addNewProfile = async (
  profile: UserProfile
): Promise<UserProfile> =>
  (await axios.post(`${baseURL}/user_profiles`, profile)).data;

export const addUpdateUserPreferences = async (
  uid: string,
  preferences: Preferences
): Promise<Preferences> =>
  (await axios.put(`${baseURL}/user_profiles/${uid}/preferences`, preferences))
    .data;

export const addVotedOnCity = async (
  uid: string,
  newCity: VotedOn
): Promise<VotedOn> =>
  (await axios.put(`${baseURL}/user_profiles/${uid}/voted-on`, newCity)).data;

export const changeVotedOnCity = async (
  uid: string,
  city: string,
  favorite: boolean
): Promise<VotedOn> =>
  (
    await axios.put(
      `${baseURL}/user_profiles/${uid}/favorites/${city}`,
      favorite
    )
  ).data;
