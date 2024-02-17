import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cards/index";
import gridOptionsReducer from "./features/gridOptions/index";

const store = configureStore({
  reducer: {
    cards: cardReducer,
    gridOptions: gridOptionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export { store };
