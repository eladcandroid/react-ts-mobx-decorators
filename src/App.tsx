import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="App">
      <Todo>Todo title</Todo>
    </div>
  );
}

export default observer(App);
