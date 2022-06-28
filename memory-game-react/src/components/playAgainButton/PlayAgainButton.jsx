import { useDispatch, useSelector } from "react-redux";
import { shuffleCards } from "../../features/cards/actions";
import { images } from "../../features/cards/selectors";
import "../../styles/playAgainButton.css";

const PlayAgainButton = () => {
  const dispatch = useDispatch();
  const unmatchedCards = useSelector((state) =>
    state.flat().filter((card) => !card.matched)
  );

  return (
    <div
      className="play-again-container"
      style={{ display: unmatchedCards.length === 0 ? "flex" : "none" }}
      role="button"
    >
      <button
        className="play-again-btn"
        onClick={() => {
          dispatch(shuffleCards(12, 4, images));
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default PlayAgainButton;
