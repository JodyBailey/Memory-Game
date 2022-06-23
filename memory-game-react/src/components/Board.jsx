import Row from "./Row";
import "../styles/board.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const Board = () => {
  const newRows = useSelector((state) => {
    return state;
  });

  return (
    <div className="board-container">
      {newRows.map((row) => (
        <Row key={uuidv4()} rowImages={row} />
      ))}
    </div>
  );
};

export default Board;
