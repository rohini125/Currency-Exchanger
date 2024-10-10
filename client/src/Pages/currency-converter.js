import React, { useEffect, useState } from "react";
import CurrencyDropdown from "./dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";
import Home from "./Home";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
  );

  // Fetch currencies
  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      const data = await res.json();
      setCurrencies(Object.keys(data.rates)); // Set currencies from rates
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  // Automatically convert currency when amount or currency changes
  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  // Currency conversion
  const convertCurrency = async () => {
    if (amount === "") {
      setConvertedAmount(0);
      return;
    }

    if (!amount) return;

    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await res.json();
      const rate = data.rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2)); // Calculate converted amount
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];

    if (favorites.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
    } else {
      updatedFavorites.push(currency);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleAddFunds = () => {
    alert(`Adding ${convertedAmount} ${toCurrency} to wallet`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-lg w-full mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
        <h2 className="mb-5 text-2xl font-semibold text-gray-700 text-center">
          Currency Converter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <CurrencyDropdown
            favorites={favorites}
            currencies={currencies}
            title="From:"
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            handleFavorite={handleFavorite}
          />
          {/* Swap currency button */}
          <div className="flex justify-center -mb-5 sm:mb-0">
            <button
              onClick={swapCurrencies}
              className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
            >
              <HiArrowsRightLeft className="text-xl text-gray-700" />
            </button>
          </div>
          <CurrencyDropdown
            favorites={favorites}
            currencies={currencies}
            currency={toCurrency}
            setCurrency={setToCurrency}
            title="To:"
            handleFavorite={handleFavorite}
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount:
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
            placeholder="Enter amount"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="convertedAmountInput"
            className="block text-sm font-medium text-gray-700"
          >
            Converted Amount:
          </label>
          <input
            value={convertedAmount !== null ? convertedAmount : ""}
            type="text"
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
          />
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Convert
          </button>
          <button
            onClick={handleAddFunds}
            className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add Funds
          </button>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default CurrencyConverter;







// import React, { useEffect, useState } from "react";
// import CurrencyDropdown from "./dropdown";
// import { HiArrowsRightLeft } from "react-icons/hi2";
// import Home from "./Home";

// const CurrencyConverter = () => {
//   const [currencies, setCurrencies] = useState([]);
//   const [amount, setAmount] = useState(1);
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [toCurrency, setToCurrency] = useState("INR");
//   const [convertedAmount, setConvertedAmount] = useState(null);
//   const [converting, setConverting] = useState(false);
//   const [favorites, setFavorites] = useState(
//     JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
//   );

//   // Fetch currencies
//   const fetchCurrencies = async () => {
//     try {
//       const res = await fetch("https://api.frankfurter.app/currencies");
//       const data = await res.json();
//       setCurrencies(Object.keys(data));
//     } catch (error) {
//       console.error("Error Fetching", error);
//     }
//   };

//   useEffect(() => {
//     fetchCurrencies();
//   }, []);

//   // Currency conversion
//   const convertCurrency = async () => {
//     if (!amount) return;
//     setConverting(true);
//     try {
//       const res = await fetch(
//         `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
//       );
//       const data = await res.json();
//       setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
//     } catch (error) {
//       console.error("Error Fetching", error);
//     } finally {
//       setConverting(false);
//     }
//   };

//   const handleFavorite = (currency) => {
//     let updatedFavorites = [...favorites];

//     if (favorites.includes(currency)) {
//       updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
//     } else {
//       updatedFavorites.push(currency);
//     }

//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   const swapCurrencies = () => {
//     setFromCurrency(toCurrency);
//     setToCurrency(fromCurrency);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
//       <div className="max-w-lg w-full mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
//         <h2 className="mb-5 text-2xl font-semibold text-gray-700 text-center">
//           Currency Converter
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
//           <CurrencyDropdown
//             favorites={favorites}
//             currencies={currencies}
//             title="From:"
//             currency={fromCurrency}
//             setCurrency={setFromCurrency}
//             handleFavorite={handleFavorite}
//           />
//           {/* Swap currency button */}
//           <div className="flex justify-center -mb-5 sm:mb-0">
//             <button
//               onClick={swapCurrencies}
//               className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
//             >
//               <HiArrowsRightLeft className="text-xl text-gray-700" />
//             </button>
//           </div>
//           <CurrencyDropdown
//             favorites={favorites}
//             currencies={currencies}
//             currency={toCurrency}
//             setCurrency={setToCurrency}
//             title="To:"
//             handleFavorite={handleFavorite}
//           />
//         </div>

//         <div className="mt-4">
//           <label
//             htmlFor="amount"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Amount:
//           </label>
//           <input
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             type="number"
//             className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
//             placeholder="Enter amount"
//           />
//         </div>

//         <div className="flex justify-end mt-6">
//           <button
//             onClick={convertCurrency}
//             className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
//             ${converting ? "animate-pulse" : ""}`}
//           >
//             Convert
//           </button>
//         </div>

//         {convertedAmount && (
//           <div className="mt-4 text-lg font-medium text-right text-green-600">
//             Converted Amount: {convertedAmount}
//           </div>
//         )}
//       </div>
//       <Home />
//     </div>
//   );
// };

// export default CurrencyConverter;

