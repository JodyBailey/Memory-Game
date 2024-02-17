import { store } from "./store";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";

const render = (component) => {
  rtlRender(<Provider store={store}>{component}</Provider>);
};

export * from "@testing-library/react";
export { render };
