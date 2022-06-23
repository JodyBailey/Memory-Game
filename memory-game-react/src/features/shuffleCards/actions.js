import { SHUFFLE_CARDS } from "./types";

const shuffleCards = (totalCards, cardsPerRow) => {
  return {
    type: SHUFFLE_CARDS,
    payload: {
      totalCards,
      cardsPerRow,
    },
  };
};

export { shuffleCards };
