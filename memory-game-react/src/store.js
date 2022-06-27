import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cards/reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: cardReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export { store };
