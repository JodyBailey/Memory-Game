import { cardReducer } from "./reducer";

export { handleCards } from "./operations";
export {
  shuffleCards,
  flipCard,
  lockCards,
  unlockUnmatchedCards,
  matchCards,
  unflipCards,
} from "./actions";

export default cardReducer;
