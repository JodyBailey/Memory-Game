import { act } from "react-dom/test-utils";
import App from "./App";
import { render, screen } from "./test-utils";

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

  test("should display two images if you click on two cards and then keep them displayed if they are the same", () => {
    render(<App />);

    let imageElements = screen.getAllByAltText("redux");
    let firstReduxCard = imageElements[0];
    let secondReduxCard = imageElements[1];

    expect(firstReduxCard.style.display).toBe("none");
    expect(secondReduxCard.style.display).toBe("none");

    act(() => {
      firstReduxCard.click();
      secondReduxCard.click();
    });

    imageElements = screen.getAllByAltText("redux");
    firstReduxCard = imageElements[0];
    secondReduxCard = imageElements[1];

    expect(firstReduxCard.style.display).toBe("block");
    expect(secondReduxCard.style.display).toBe("block");
  });

  test("should display two images if you click on the card and wait a second and hide them again after the timer runs if the images were not the same", () => {
    jest.useFakeTimers();

    render(<App />);

    let angularCards = screen.getAllByAltText("angular");
    let pythonCards = screen.getAllByAltText("python");
    let angularCard = angularCards[0];
    let pythonCard = pythonCards[0];

    expect(angularCard.style.display).toBe("none");
    expect(pythonCard.style.display).toBe("none");

    act(() => {
      angularCard.click();
      pythonCard.click();
    });

    angularCards = screen.getAllByAltText("angular");
    pythonCards = screen.getAllByAltText("python");
    angularCard = angularCards[0];
    pythonCard = pythonCards[0];

    expect(angularCard.style.display).toBe("block");
    expect(pythonCard.style.display).toBe("block");

    act(() => {
      jest.runAllTimers();
    });

    angularCards = screen.getAllByAltText("angular");
    pythonCards = screen.getAllByAltText("python");
    angularCard = angularCards[0];
    pythonCard = pythonCards[0];

    expect(angularCard.style.display).toBe("none");
    expect(pythonCard.style.display).toBe("none");
  });
});
