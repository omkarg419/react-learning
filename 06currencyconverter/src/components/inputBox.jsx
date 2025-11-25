import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
          className="w-full outline-none bg-gray-100 py-1.5 rounded-lg px-2 mt-1"
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer w-fit outline-none"
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
