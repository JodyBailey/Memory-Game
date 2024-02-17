import gridOptionsTypes from "./types";
const initialState = { isDisplayed: true };

const gridOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case gridOptionsTypes.DISPLAY_OPTIONS: {
      return { ...state, isDisplayed: true };
    }
    case gridOptionsTypes.HIDE_OPTIONS: {
      return { ...state, isDisplayed: false };
    }
    default: {
      return state;
    }
  }
};

export { gridOptionsReducer };
