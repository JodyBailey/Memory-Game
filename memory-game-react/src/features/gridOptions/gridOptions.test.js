import { hideOptions, displayOptions } from "./actions";
import { gridOptionsReducer } from "./reducer";

describe("The grid options action creator", () => {
  test("should set the value of isDisplayed to true", () => {
    const result = gridOptionsReducer({ isDisplayed: false }, displayOptions());
    expect(result).toEqual({ isDisplayed: true });
  });

  test("should set the value of isDisplayed to false", () => {
    const result = gridOptionsReducer({ isDisplayed: true }, hideOptions());
    expect(result).toEqual({ isDisplayed: false });
  });
});
