import { SHUFFLE_CARDS } from "./types";
import { generateImagesRows } from "./utils";

const initialState = generateImagesRows(12, 4);

const shuffleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLE_CARDS: {
      return generateImagesRows(
        action.payload.totalCards,
        action.payload.cardsPerRow
      );
    }
    default: {
      return state;
    }
  }
};

export { shuffleReducer };
