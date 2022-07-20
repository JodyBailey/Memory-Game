import { store } from "../../store";
import Card from "./Card";
import { render, screen } from "../../test-utils";
import { shuffleCards } from "../../features/cards/index";
import { images } from "../../features/cards/selectors";

describe("The card component", () => {
  test("should contain an image with a display of none", () => {
    store.dispatch(shuffleCards(12, 4, images));
    render(<Card card={store.getState().cards[0][0]} />);

    const imageElement = screen.getByRole("img", { hidden: true });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.style.display).toBe("none");
  });
});
