import Board from "./Board";
import { render, screen } from "../../test-utils";
import { store } from "../../store";
import { shuffleCards } from "../../features/cards/index";
import { images } from "../../features/cards/selectors";

describe("The board component", () => {
  test("should contain three row elements", () => {
    store.dispatch(shuffleCards(12, 4, images));
    render(<Board />);

    const divContainer = screen.getByTestId("board-div");
    expect(divContainer).toBeInTheDocument();
    expect(divContainer.childElementCount).toBe(3);
  });
});
