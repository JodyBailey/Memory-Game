import {
  FLIP_CARD,
  SHUFFLE_CARDS,
  LOCK_CARDS,
  UNLOCK_UNMATCHED_CARDS,
  MATCH_CARDS,
  UNFLIP_CARDS,
} from "./types";
import { generateImagesRows } from "./selectors";
import clone from "clone";

const initialState = generateImagesRows(12, 4);

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLE_CARDS: {
      return generateImagesRows(
        action.payload.totalCards,
        action.payload.cardsPerRow
      );
    }
    case FLIP_CARD: {
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
    case UNFLIP_CARDS: {
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
    case LOCK_CARDS: {
      const newState = clone(state);

      newState.forEach((row) => {
        row.forEach((card) => {
          card.locked = true;
        });
      });

      return newState;
    }
    case MATCH_CARDS: {
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
    case UNLOCK_UNMATCHED_CARDS: {
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
