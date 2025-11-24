import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      chars += "0123456789";
    }
    if (charAllowed) {
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipbord = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.focus();
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700  text-yellow-400">
      <h1 className="text-white my-2 text-center font-bold text-2xl">
        Password Generator
      </h1>
      <div className="mb-4 flex shadow rounded-lg  overflow-hidden ">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipbord}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  "
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name="length"
            id="length"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id="numbers"
          />
          <label htmlFor="numbers">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={(e) => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id="characters"
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
