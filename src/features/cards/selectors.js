const cPlusPlus = require("../../images/c++logo.png");
const docker = require("../../images/docker.png");
const mongoDB = require("../../images/mongodb.png");
const redux = require("../../images/redux.png");
const python = require("../../images/python.png");
const angular = require("../../images/angular.png");
const { v4: uuidv4 } = require("uuid");

const images = [cPlusPlus, docker, redux, mongoDB, python, angular];

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

const generateImagesRows = (totalCards, cardsPerRow, images) => {
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
    row.push({
      id: uuidv4(),
      image: randomizedImagesArr[i],
      flipped: false,
      locked: false,
      matched: false,
    });
    if (row.length === cardsPerRow) {
      imagesRows.push(row);
      row = [];
    }
  }

  return imagesRows;
};

export { generateImagesRows, images };
