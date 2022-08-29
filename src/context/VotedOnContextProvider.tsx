import { ReactNode, useContext, useEffect, useState } from "react";
import VotedOn from "../models/VotedOn";
import { addVotedOn, getVotedOnByUid } from "../services/votedOnService";
import AuthContext from "./AuthContext";
import VotedOnContext from "./VotedOnContext";

interface Props {
  children: ReactNode;
}

const VotedOnContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [votedOn, setVotedOn] = useState<VotedOn[]>([]);

  const getAndSetVotedOn = (uid: string): void => {
    getVotedOnByUid(uid).then((response) => {
      setVotedOn(response);
    });
  };
  const addCityToVotedOn = (votedOn: VotedOn): void => {
    addVotedOn(votedOn).then(() => {
      getAndSetVotedOn(user!.uid);
    });
  };

  useEffect(() => {
    if (user) {
      getAndSetVotedOn(user.uid);
    }
  }, [user]);

  return (
    <VotedOnContext.Provider value={{ votedOn, addCityToVotedOn }}>
      {children}
    </VotedOnContext.Provider>
  );
};

export default VotedOnContextProvider;
