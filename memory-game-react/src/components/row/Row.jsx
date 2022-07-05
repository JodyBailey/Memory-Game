import Card from "../card/Card";
import "../../styles/row.css";
import { v4 as uuidv4 } from "uuid";

const Row = ({ rowCards }) => {
  return (
    <div className="row" data-testid="row-div">
      {rowCards.map((card) => (
        <Card card={card} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Row;
