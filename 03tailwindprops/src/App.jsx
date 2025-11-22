import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards";

function App() {
  
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-4 rounded-md">
        vite with tailwindcss
      </h1>
      <Cards username="omkar" post="Staff Engineer" place="Algolia" />
      <Cards />
      <Cards />
      <Cards />
    </>
  );
}

export default App;
