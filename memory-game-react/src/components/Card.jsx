import { useDispatch, useSelector } from "react-redux";
import { flipCard, lockCards } from "../features/shuffleCards/actions";
import "../styles/card.css";

const Card = ({ image }) => {
  const dispatch = useDispatch();
  const flippedImages = useSelector((state) => {
    const flattened = state.flat();
    const flipped = flattened.filter((element) => {
      return element.flipped;
    });
    return flipped;
  });

  return (
    <div
      className="card"
      onClick={() => {
        dispatch(flipCard(image));
        console.log(flippedImages.length);
      }}
    >
      <img
        src={image.image}
        alt={image.image.slice(14, image.image.indexOf("."))}
        style={{ display: image.flipped ? "block" : "none" }}
      />
    </div>
  );
};

export default Card;
