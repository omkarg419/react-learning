import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bg from "./assets/bg.png";
import "./App.css";
import useCurrencyInfo from "./hooks/usecurrencyInfo.js";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo || {});
  // console.log(`currencyInfo`, currencyInfo);

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo ? currencyInfo[to] : 0));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full">
        <div
          className="w-full max-w-md mx-auto border border-gray-50 rounded-lg
        p-5 backdrop-blur-sm bg-white/30 "
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <h1 className="text-2xl font-bold mb-5 text-center text-white/90">
              Currency Converter
            </h1>

            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                selectedCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7l4-4m0 0l4 4m-4-4v18M16 17l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
              </button>
            </div>

            <div className="w-full mt-1 mb-5">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                amountDisabled={true}
                selectedCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setConvertedAmount(amount)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
