import { createContext } from "react";
import VotedOn from "../models/VotedOn";

interface VotedOnContextModel {
  votedOn: VotedOn[];
  addCityToVotedOn: (votedOn: VotedOn) => void;
}

const defaultValues: VotedOnContextModel = {
  votedOn: [],
  addCityToVotedOn: () => {},
};

const VotedOnContext = createContext(defaultValues);

export default VotedOnContext;
