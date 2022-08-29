import axios from "axios";
import VotedOn from "../models/VotedOn";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getVotedOnByUid = async (uid: string): Promise<VotedOn[]> =>
  (await axios.get(`${baseURL}/votedOn/${uid}`)).data;

export const addVotedOn = async (votedOn: VotedOn): Promise<VotedOn> =>
  (await axios.post(`${baseURL}/votedOn`, votedOn)).data;
