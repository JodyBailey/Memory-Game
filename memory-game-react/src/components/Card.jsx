import { useState } from "react";
import { images } from "../imagesArr";
import "../styles/card.css";

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const Card = () => {
  const [randomImage, setRandomImage] = useState(getRandomImage());

  const randomizeImage = () => {
    setRandomImage(getRandomImage());
  };

  return (
    <div className="card">
      <img src={randomImage} />
    </div>
  );
};

export default Card;
