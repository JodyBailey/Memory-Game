import {
  SHUFFLE_CARDS,
  FLIP_CARD,
  LOCK_CARDS,
  UNLOCK_UNMATCHED_CARDS,
} from "./types";

const shuffleCards = (totalCards, cardsPerRow) => {
  return {
    type: SHUFFLE_CARDS,
    payload: {
      totalCards,
      cardsPerRow,
    },
  };
};

const flipCard = (image) => {
  return {
    type: FLIP_CARD,
    payload: {
      image,
    },
  };
};

const lockCards = () => {
  return {
    type: LOCK_CARDS,
  };
};

const unlockUnmatchedCards = (...matchedCards) => {
  return {
    type: UNLOCK_UNMATCHED_CARDS,
    payload: [matchedCards],
  };
};

export { shuffleCards, flipCard, lockCards, unlockUnmatchedCards };
