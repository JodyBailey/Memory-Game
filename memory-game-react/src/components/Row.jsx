import Card from "./Card";
import "../styles/row.css";
import { v4 as uuidv4 } from "uuid";

const Row = ({ rowImages }) => {
  return (
    <div className="row">
      {rowImages.map((image) => (
        <Card image={image} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Row;
