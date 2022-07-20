import { render, screen } from "../../test-utils";
import GridOptions from "./GridOptions";

describe("The GridOptions component", () => {
  test("should be in the document with 4 options and a heading ", () => {
    render(<GridOptions />);

    const gridContainer = screen.getByTestId(/grid-options-container/i);
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer.childElementCount).toBe(4);
  });
});
