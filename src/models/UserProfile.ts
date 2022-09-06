import Preferences from "./Preferences";
import VotedOn from "./VotedOn";

export default interface UserProfile {
  id?: string;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  preferences: Preferences | null;
  votedOn: VotedOn[];
}
