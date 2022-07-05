import Board from "./Board";
import { render, screen } from "../../test-utils";

describe("The board component", () => {
  test("should contain three row elements", () => {
    render(<Board />);

    const divContainer = screen.getByTestId("board-div");
    expect(divContainer).toBeInTheDocument();
    expect(divContainer.childElementCount).toBe(3);
  });
});
