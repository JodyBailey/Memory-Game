import {
  SHUFFLE_CARDS,
  FLIP_CARD,
  LOCK_CARDS,
  UNLOCK_UNMATCHED_CARDS,
  MATCH_CARDS,
  UNFLIP_CARDS,
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

const flipCard = (cardId) => {
  return {
    type: FLIP_CARD,
    payload: cardId,
  };
};

const unflipCards = (...cardIds) => {
  return {
    type: UNFLIP_CARDS,
    payload: cardIds,
  };
};

const lockCards = () => {
  return {
    type: LOCK_CARDS,
  };
};

const matchCards = (...cardIds) => {
  return {
    type: MATCH_CARDS,
    payload: cardIds,
  };
};

const unlockUnmatchedCards = (matchedCards) => {
  return {
    type: UNLOCK_UNMATCHED_CARDS,
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
