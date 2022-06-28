import { store } from "../../store";
import Card from "./Card";
import { render, screen } from "../../test-utils";

describe("The card component", () => {
  test("should contain an image with a display of none", () => {
    render(<Card card={store.getState()[0][0]} />);

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.firstChild.style.display).toBe("none");
  });
});
