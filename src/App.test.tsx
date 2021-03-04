import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "mobx-react";
import ThemeStore from "./store/ThemeStore";
import Todo from "./components/Todo";
import { cleanup } from "@testing-library/react";

describe("Todo Component with theme", () => {
  let themeStore: ThemeStore;
  let component: RenderResult;
  beforeEach(() => {
    themeStore = new ThemeStore();
    component = render(
      <Provider themeStore={themeStore}>
        <Todo>Check</Todo>
      </Provider>
    );
  });
  afterEach(cleanup);

  test("renders black theme", () => {
    const container = component.getByTestId("container");
    expect(container).toHaveStyle({ color: "black" });
  });

  test("toggle theme 1 time", () => {
    const container = component.getByTestId("container");
    expect(container).toHaveStyle({ color: "black" });

    window.alert = () => {};
    themeStore.toggleTheme();
    expect(container).toHaveStyle({ color: "green" });
  });

  test("toggle theme 2 times", () => {
    const container = component.getByTestId("container");
    expect(container).toHaveStyle({ color: "black" });

    window.alert = () => {};
    themeStore.toggleTheme();
    expect(container).toHaveStyle({ color: "green" });
  });
});
