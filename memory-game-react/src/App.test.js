// import { act } from "react-dom/test-utils";
// import App from "./App";
// import { render, screen } from "./test-utils";

// describe("The App", () => {
//   test("should contain 3 rows, 12 image cards, a board container and a play again button", () => {
//     render(<App />);

//     const rowDivContainers = screen.getAllByTestId("row-div");
//     const boardDivContainer = screen.getByTestId("board-div");
//     const playAgainButton = screen.getByText(/play again/i);
//     const imageElements = screen.getAllByRole("img", { hidden: true });

//     expect(boardDivContainer).toBeInTheDocument();
//     expect(playAgainButton).toBeInTheDocument();
//     expect(rowDivContainers.length).toBe(3);
//     expect(imageElements.length).toBe(12);

//     screen.debug();
//   });

//   test("should display two images if you click on two cards and then keep them displayed if they are the same", () => {
//     render(<App />);

//     let imageElements;
//     let firstReduxCard;
//     let secondReduxCard;

//     const updateElements = () => {
//       imageElements = screen.getAllByAltText("redux");
//       firstReduxCard = imageElements[0];
//       secondReduxCard = imageElements[1];
//     };

//     updateElements();

//     expect(firstReduxCard.style.display).toBe("none");
//     expect(secondReduxCard.style.display).toBe("none");

//     act(() => {
//       firstReduxCard.click();
//       secondReduxCard.click();
//     });

//     updateElements();

//     expect(firstReduxCard.style.display).toBe("block");
//     expect(secondReduxCard.style.display).toBe("block");
//   });

//   test("should display two images if you click on the card and wait a second and hide them again after the timer runs if the images were not the same", () => {
//     jest.useFakeTimers();

//     render(<App />);

//     let angularCards;
//     let pythonCards;
//     let angularCard;
//     let pythonCard;

//     const updateElements = () => {
//       angularCards = screen.getAllByAltText("angular");
//       pythonCards = screen.getAllByAltText("python");
//       angularCard = angularCards[0];
//       pythonCard = pythonCards[0];
//     };

//     updateElements();

//     expect(angularCard.style.display).toBe("none");
//     expect(pythonCard.style.display).toBe("none");

//     act(() => {
//       angularCard.click();
//       pythonCard.click();
//     });

//     updateElements();

//     expect(angularCard.style.display).toBe("block");
//     expect(pythonCard.style.display).toBe("block");

//     act(() => {
//       jest.runAllTimers();
//     });

//     updateElements();

//     expect(angularCard.style.display).toBe("none");
//     expect(pythonCard.style.display).toBe("none");
//   });

//   test("should display the play again button once all cards are matched", () => {
//     render(<App />);

//     let angularCards;
//     let pythonCards;
//     let mongodbCards;
//     let dockerCards;
//     let cPlusPlusCards;
//     let cardsArray;

//     const updateElements = () => {
//       angularCards = screen.getAllByAltText("angular");
//       pythonCards = screen.getAllByAltText("python");
//       mongodbCards = screen.getAllByAltText("mongodb");
//       dockerCards = screen.getAllByAltText("docker");
//       cPlusPlusCards = screen.getAllByAltText("c++logo");

//       cardsArray = [
//         angularCards,
//         pythonCards,
//         mongodbCards,
//         dockerCards,
//         cPlusPlusCards,
//       ].flat();
//     };

//     updateElements();

//     cardsArray.forEach((card) => expect(card.style.display).toBe("none"));

//     act(() => {
//       cardsArray.forEach((card) => card.click());
//     });

//     updateElements();

//     cardsArray.forEach((card) => expect(card.style.display).toBe("block"));

//     const playAgainContainer = screen.getByTestId("play-again-btn-container");

//     expect(playAgainContainer.style.display).toBe("flex");
//   });

//   test("should reset the game when the play again button is clicked", () => {
//     render(<App />);

//     let allImages;
//     const playAgainButton = screen.getByText(/play again/i);

//     const updateElements = () => {
//       allImages = screen.getAllByRole("img", { hidden: true });
//     };

//     updateElements();

//     allImages.forEach((image) => expect(image.style.display).toBe("block"));

//     act(() => {
//       playAgainButton.click();
//     });

//     updateElements();

//     allImages.forEach((image) => expect(image.style.display).toBe("none"));
//   });
// });
