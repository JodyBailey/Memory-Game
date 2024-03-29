import { useDispatch, useSelector } from "react-redux";
import { displayOptions } from "../../features/gridOptions/index";
import "../../styles/playAgainButton.css";

const PlayAgainButton = () => {
  const dispatch = useDispatch();
  const unmatchedCardsCount = useSelector((state) => {
    if (Object.keys(state.cards).length > 0) {
      return state.cards.flat().filter((card) => !card.matched).length;
    }
  });

  return (
    <div
      className="play-again-container"
      style={{ display: unmatchedCardsCount === 0 ? "flex" : "none" }}
      data-testid="play-again-btn-container"
    >
      <button
        className="play-again-btn"
        onClick={() => {
          dispatch(displayOptions());
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default PlayAgainButton;
