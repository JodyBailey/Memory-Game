import { useDispatch, useSelector } from "react-redux";
import { shuffleCards } from "../features/cards/actions";
import "../styles/playAgainButton.css";

const PlayAgainButton = () => {
  const dispatch = useDispatch();
  const unmatchedCards = useSelector((state) =>
    state.flat().filter((card) => !card.matched)
  );

  return (
    <div
      className="play-again-container"
      style={{ display: unmatchedCards.length === 0 ? "flex" : "none" }}
    >
      <button
        className="play-again-btn"
        onClick={() => {
          dispatch(shuffleCards(12, 4));
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default PlayAgainButton;
