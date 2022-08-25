import "./FavoriteCard.css";

interface Props {
  favorite: any;
}

const FavoriteCard = ({ favorite }: Props) => {
  return <li className="FavoriteCard">{favorite}</li>;
};

export default FavoriteCard;
