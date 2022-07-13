import Row from "../row/Row";
import "../../styles/board.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const Board = () => {
  const newRows = useSelector((state) => {
    return state.cards;
  });

  const cardsPerRow = newRows[0].length;

  return (
    <div
      className="board-container"
      data-testid="board-div"
      data-size={
        cardsPerRow === 2 ? "small" : cardsPerRow === 3 ? "medium" : "large"
      }
    >
      {newRows.map((row) => (
        <Row key={uuidv4()} rowCards={row} />
      ))}
    </div>
  );
};

export default Board;
