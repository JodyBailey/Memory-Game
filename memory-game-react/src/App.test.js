import { act } from "react-dom/test-utils";
import App from "./App";
import { render, screen, fireEvent, cleanup } from "./test-utils";

afterEach(cleanup);

describe("The App component", () => {
  test("should contain 3 rows, 12 image cards, a board container and a play again button", () => {
    render(<App />);

    const rowDivContainers = screen.getAllByTestId("row-div");
    const boardDivContainer = screen.getByTestId("board-div");
    const playAgainButton = screen.getByText(/play again/i);
    const imageElements = screen.getAllByRole("img");

    expect(boardDivContainer).toBeInTheDocument();
    expect(playAgainButton).toBeInTheDocument();
    expect(rowDivContainers.length).toBe(3);
    expect(imageElements.length).toBe(12);
  });

  test("should display an image if you click on a card", () => {
    render(<App />);

    const imageElements = screen.getAllByAltText("redux");
    let firstReduxCard = imageElements[0];
    let secondReduxCard = imageElements[1];

    act(() => {
      firstReduxCard.click();
      secondReduxCard.click();
    });

    firstReduxCard = screen.getAllByAltText("redux")[0];
    secondReduxCard = screen.getAllByAltText("redux")[1];

    expect(firstReduxCard.style.display).toBe("block");
    expect(secondReduxCard.style.display).toBe("block");
  });
});
