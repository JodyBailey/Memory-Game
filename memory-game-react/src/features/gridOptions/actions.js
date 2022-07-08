import gridOptionsTypes from "./types";

const displayOptions = () => {
  return {
    type: gridOptionsTypes.DISPLAY_OPTIONS,
  };
};

const hideOptions = () => {
  return {
    type: gridOptionsTypes.HIDE_OPTIONS,
  };
};

export { hideOptions, displayOptions };
