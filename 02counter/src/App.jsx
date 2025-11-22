import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Counter, setCouter] = useState(15);
  // let Counter = 15;
  const addValue = () => {
    setCouter((prevCounter) => prevCounter + 1);
    setCouter((prevCounter) => prevCounter + 1);
    setCouter((prevCounter) => prevCounter + 1);
    setCouter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCouter((prevCounter) => prevCounter - 1);
    setCouter((prevCounter) => prevCounter - 1);
    setCouter((prevCounter) => prevCounter - 1);
    setCouter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Learning react with Omkar {Counter}</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick={addValue}>Add value</button>
      {"  "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {Counter}</p>
    </>
  );
}

export default App;
