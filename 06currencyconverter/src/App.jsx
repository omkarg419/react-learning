import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bg from "./assets/bg.png";
import "./App.css";

function App() {
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
}

export default App;
