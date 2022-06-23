import { configureStore } from "@reduxjs/toolkit";
import { shuffleReducer } from "./features/shuffleCards/reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: shuffleReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export { store };
