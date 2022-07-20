import { store } from "../../store";
import Row from "./Row";
import { render, screen } from "../../test-utils";
import { shuffleCards } from "../../features/cards/index";
import { images } from "../../features/cards/selectors";

describe("The row coponent", () => {
  test("should render four cards components", () => {
    store.dispatch(shuffleCards(12, 4, images));
    render(<Row rowCards={store.getState().cards[0]} />);

    const divContainer = screen.getByTestId("row-div");
    expect(divContainer).toBeInTheDocument();
    expect(divContainer.childElementCount).toBe(4);
  });
});
