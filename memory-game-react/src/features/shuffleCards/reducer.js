import {
  FLIP_CARD,
  SHUFFLE_CARDS,
  LOCK_CARDS,
  UNLOCK_UNMATCHED_CARDS,
} from "./types";
import { generateImagesRows } from "./utils";
import clone from "clone";

const initialState = generateImagesRows(12, 4);

const shuffleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLE_CARDS: {
      return generateImagesRows(
        action.payload.totalCards,
        action.payload.cardsPerRow
      );
    }
    case FLIP_CARD: {
      if (action.payload.image.locked) return state;

      const newState = clone(state);

      newState.forEach((row) => {
        row.forEach((card) => {
          if (card.id === action.payload.image.id) {
            card.flipped = true;
            return;
          }
        });
      });

      return newState;
    }
    case LOCK_CARDS: {
      const newState = clone(state);

      newState.forEach((row) => {
        row.forEach((card) => {
          card.locked = true;
        });
      });

      return newState;
    }
    case UNLOCK_UNMATCHED_CARDS: {
      const newState = clone(state);

      newState.forEach((row) => {
        row.forEach((card) => {
          if (action.payload.includes(card)) return;
          card.locked = false;
        });
      });
    }
    default: {
      return state;
    }
  }
};

export { shuffleReducer };
