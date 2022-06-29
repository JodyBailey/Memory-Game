import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cards/index";

const store = configureStore({
  reducer: cardReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export { store };
