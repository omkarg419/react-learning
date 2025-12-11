import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts/index.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}
    >
      <h1 className="text-2xl bg-gray-900 text-amber-200 inline p-8">heloo</h1>
    </TodoProvider>
  );
}

export default App;
