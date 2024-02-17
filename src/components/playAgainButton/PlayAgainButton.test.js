import PlayAgainButton from "./PlayAgainButton";
import { render, screen } from "../../test-utils";

describe("The PlayAgainButton component", () => {
  test("should should have a button", () => {
    render(<PlayAgainButton />);
    const playAgainButton = screen.getByText(/play again/i);
    expect(playAgainButton).toBeInTheDocument();
  });
});
