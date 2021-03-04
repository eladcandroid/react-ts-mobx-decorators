import React from "react";
import TodoProps from "../interfaces/TodoProps";
import { observer } from "mobx-react";
import { useStores } from "../hooks/use-stores";

const Todo = ({ title = "Default", children }: TodoProps) => {
  const {
    themeStore: { color, toggleColor },
  } = useStores();

  return (
    <div style={{ color }}>
      {color}
      {children}
      <button onClick={toggleColor}>Change Color</button>
    </div>
  );
};

export default observer(Todo);
