import { images } from "../../imagesArr";

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

const randomizeElements = (array) => {
  let elementsArr = [...array];
  const randomizedArray = [];

  for (let i = 0; i < array.length; i++) {
    const randomElement = elementsArr[getRandomIndex(elementsArr)];
    randomizedArray.push(randomElement);
    elementsArr.splice(elementsArr.indexOf(randomElement), 1);
  }

  return randomizedArray;
};

const generateImagesRows = (totalCards, cardsPerRow) => {
  const imagesArr = [];
  const imagesRows = [];
  let row = [];
  let availableImages = [...images];

  for (let i = 0; i < totalCards / 2; i++) {
    const randomImage = availableImages[getRandomIndex(availableImages)];
    imagesArr.push(randomImage, randomImage);
    availableImages.splice(availableImages.indexOf(randomImage), 1);
  }

  const randomizedImagesArr = randomizeElements(imagesArr);
  for (let i = 0; i < randomizedImagesArr.length; i++) {
    row.push(randomizedImagesArr[i]);
    if (row.length === cardsPerRow) {
      imagesRows.push(row);
      row = [];
    }
  }

  return imagesRows;
};

export { generateImagesRows };
