import { cardTypes } from "./types";
import { generateImagesRows, images } from "./selectors";
import clone from "clone";

const initialState = generateImagesRows(12, 4, images);

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardTypes.SHUFFLE_CARDS: {
      return generateImagesRows(
        action.payload.totalCards,
        action.payload.cardsPerRow,
        action.payload.images
      );
    }
    case cardTypes.FLIP_CARD: {
      const newState = clone(state);

      newState.forEach((row) => {
        row.forEach((card) => {
          if (card.id === action.payload) {
            card.flipped = true;
            return;
          }
        });
      });

      return newState;
    }
    case cardTypes.UNFLIP_CARDS: {
      const newState = clone(state);

      action.payload.forEach((id) => {
        newState.forEach((row) => {
          row.forEach((card) => {
            if (card.id === id) {
              card.flipped = false;
              return;
            }
          });
        });
      });

      return newState;
    }
    case cardTypes.LOCK_CARDS: {
      const newState = clone(state);

      newState.forEach((row) => {
        row.forEach((card) => {
          card.locked = true;
        });
      });

      return newState;
    }
    case cardTypes.MATCH_CARDS: {
      const newState = clone(state);

      action.payload.forEach((id) => {
        newState.forEach((row) => {
          row.forEach((card) => {
            if (card.id === id) {
              card.matched = true;
              return;
            }
          });
        });
      });

      return newState;
    }
    case cardTypes.UNLOCK_UNMATCHED_CARDS: {
      const newState = clone(state);

      newState.forEach((row) => {
        row.forEach((card) => {
          if (action.payload.includes(card)) return;
          card.locked = false;
        });
      });

      return newState;
    }
    default: {
      return state;
    }
  }
};

export { cardReducer };
