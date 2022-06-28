import { cardReducer } from "./reducer";
import {
  shuffleCards,
  flipCard,
  lockCards,
  unlockUnmatchedCards,
  matchCards,
  unflipCards,
} from "./actions";
import { generateImagesRows } from "./selectors";

const images = ["react", "git", "mongoDB", "angular", "vue", "docker"];
const initialState = generateImagesRows(12, 4, images);
const cardIds = initialState.flat().map((card) => card.id);

describe("The cards action creators", () => {
  test("should shuffle the cards to create 3 new rows with 4 cards per row with the shuffleCards action creator", () => {
    const result = cardReducer([], shuffleCards(12, 4, images));
    expect(result.length).toBe(3);
    expect(result[0].length).toBe(4);
    expect(result[1].length).toBe(4);
    expect(result[2].length).toBe(4);
  });

  test("should flip a card when the flipCard action creator is called", () => {
    const result = cardReducer(initialState, flipCard(cardIds[0]));
    expect(result[0][0].flipped).toBeTruthy();
  });

  test("should lock all cards when the lockCards action creator is called", () => {
    const result = cardReducer(initialState, lockCards()).flat();
    const allCardsLocked = result.every((card) => card.locked);
    expect(allCardsLocked).toBeTruthy();
  });

  test("should lock all cards when the lockCards action creator is called", () => {
    const result = cardReducer(initialState, lockCards()).flat();
    const allCardsLocked = result.every((card) => card.locked);
    expect(allCardsLocked).toBeTruthy();
  });

  test("should unlock cards that are not matched if the unlockUnmatchedCards action creator is called", () => {
    const result = cardReducer(initialState, unlockUnmatchedCards([])).flat();
    const allCardsUnlocked = result.every((card) => !card.locked);
    expect(allCardsUnlocked).toBeTruthy();
  });

  test("should change the cards matched property to true if the matchCards action creator is called with the matching cards ids", () => {
    const result = cardReducer(
      initialState,
      matchCards(cardIds[0], cardIds[1])
    );
    expect(result[0][0].matched).toBeTruthy();
    expect(result[0][1].matched).toBeTruthy();
  });

  test("should set the cards flipped property to false if the unflipCards action creator is called", () => {
    let result = cardReducer(initialState, flipCard(cardIds[0]));
    result = cardReducer(result, flipCard(cardIds[1]));
    expect(result[0][0].flipped).toBeTruthy();
    expect(result[0][1].flipped).toBeTruthy();

    result = cardReducer(result, unflipCards(cardIds[0], cardIds[1]));
    expect(result[0][0].flipped).toBeFalsy();
    expect(result[0][1].flipped).toBeFalsy();
  });
});
