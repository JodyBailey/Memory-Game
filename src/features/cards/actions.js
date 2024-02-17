import { cardTypes } from "./types";

const shuffleCards = (totalCards, cardsPerRow, images) => {
  return {
    type: cardTypes.SHUFFLE_CARDS,
    payload: {
      totalCards,
      cardsPerRow,
      images,
    },
  };
};

const flipCard = (cardId) => {
  return {
    type: cardTypes.FLIP_CARD,
    payload: cardId,
  };
};

const unflipCards = (...cardIds) => {
  return {
    type: cardTypes.UNFLIP_CARDS,
    payload: cardIds,
  };
};

const lockCards = () => {
  return {
    type: cardTypes.LOCK_CARDS,
  };
};

const matchCards = (...cardIds) => {
  return {
    type: cardTypes.MATCH_CARDS,
    payload: cardIds,
  };
};

const unlockUnmatchedCards = (matchedCards) => {
  return {
    type: cardTypes.UNLOCK_UNMATCHED_CARDS,
    payload: matchedCards,
  };
};

export {
  shuffleCards,
  flipCard,
  lockCards,
  unlockUnmatchedCards,
  matchCards,
  unflipCards,
};
