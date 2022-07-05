import { store } from "../../store";
import Row from "./Row";
import { render, screen } from "../../test-utils";

describe("The row coponent", () => {
  test("should render four cards components", () => {
    render(<Row rowCards={store.getState()[0]} />);

    const divContainer = screen.getByTestId("row-div");
    expect(divContainer).toBeInTheDocument();
    expect(divContainer.childElementCount).toBe(4);
  });
});
