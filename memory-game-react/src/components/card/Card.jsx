import { useDispatch } from "react-redux";
import { handleCards } from "../../features/cards/index";
import "../../styles/card.css";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="card"
      onClick={(e) => {
        dispatch(handleCards(card));
      }}
      role="img"
    >
      <img
        src={card.image}
        alt={card.image.slice(
          /^\/static/.test(card.image) ? 14 : 0,
          card.image.indexOf(".")
        )}
        style={{
          display: card.flipped || card.matched ? "block" : "none",
          opacity: card.matched ? 0.6 : 1,
        }}
      />
    </div>
  );
};

export default Card;
