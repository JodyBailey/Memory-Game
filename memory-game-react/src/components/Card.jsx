import { useDispatch } from "react-redux";
import { handleCards } from "../features/cards/operations";
import "../styles/card.css";

const Card = ({ image }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="card"
      onClick={() => {
        dispatch(handleCards(image));
      }}
    >
      <img
        src={image.image}
        alt={image.image.slice(14, image.image.indexOf("."))}
        style={{
          display: image.flipped || image.matched ? "block" : "none",
          opacity: image.matched ? 0.6 : 1,
        }}
      />
    </div>
  );
};

export default Card;
