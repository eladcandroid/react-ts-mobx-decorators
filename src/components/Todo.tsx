import React from "react";
import TodoProps from "../interfaces/TodoProps";
import { observer } from "mobx-react";
import { useStores } from "../hooks/use-stores";

const Todo = ({ children }: TodoProps) => {
  const {
    themeStore: { colors, themeName, toggleTheme },
  } = useStores();

  return (
    <div
      data-testid="container"
      style={{ color: colors.foreground, backgroundColor: colors.background }}
    >
      {children}
      <br />
      <button onClick={toggleTheme}>Current theme: {themeName}</button>
    </div>
  );
};

export default observer(Todo);
