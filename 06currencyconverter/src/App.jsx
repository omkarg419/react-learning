import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="bg-yellow-500 text-white p-4 rounded">hello </h1>
    </div>
  );
}

export default App;
