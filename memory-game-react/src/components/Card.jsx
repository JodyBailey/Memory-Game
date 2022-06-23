import "../styles/card.css";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt={image.slice(14, image.indexOf("."))} />
    </div>
  );
};

export default Card;
