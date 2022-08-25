import "./PreferenceCard.css";

interface Props {
  preference: any;
}

const PreferenceCard = ({ preference }: Props) => {
  return <li className="PreferenceCard">{preference}</li>;
};

export default PreferenceCard;
