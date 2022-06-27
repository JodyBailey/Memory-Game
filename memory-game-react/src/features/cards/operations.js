import {
  flipCard,
  matchCards,
  unlockUnmatchedCards,
  unflipCards,
  lockCards,
} from "./actions";

const handleCards = (image) => {
  return function (dispatch, getState) {
    if (image.locked || image.flipped || image.matched) return;

    dispatch(flipCard(image.id));
    const flippedCards = [];
    const matchedCards = [];

    getState()
      .flat()
      .forEach((card) => {
        if (card.flipped) {
          flippedCards.push(card);
        } else if (card.matched) {
          matchedCards.push(card);
        }
      });

    if (flippedCards.length === 2) {
      const [{ id: firstFlippedId }, { id: secondFlippedId }] = flippedCards;

      if (flippedCards[0].image === flippedCards[1].image) {
        dispatch(matchCards(firstFlippedId, secondFlippedId));
        dispatch(unflipCards(firstFlippedId, secondFlippedId));
      } else {
        dispatch(lockCards());
        setTimeout(() => {
          dispatch(unlockUnmatchedCards(matchedCards));
          dispatch(unflipCards(firstFlippedId, secondFlippedId));
        }, 1000);
      }
    }
  };
};

export { handleCards };
