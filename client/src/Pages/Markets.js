import React, { useEffect, useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa'; // Icon for currency symbol
import { IoEarth } from 'react-icons/io5'; // Icon for countries

const popularCurrencies = {
  INR: { name: 'Rupees', countries: ['India'] },
  USD: { name: 'Dollar', countries: ['United States'] },
  EUR: { name: 'Euro', countries: ['Eurozone'] },
  GBP: { name: 'Pound', countries: ['United Kingdom'] },
  JPY: { name: 'Yen', countries: ['Japan'] },
  AUD: { name: 'Australian Dollar', countries: ['Australia'] },
  CAD: { name: 'Canadian Dollar', countries: ['Canada'] },
  CHF: { name: 'Swiss Franc', countries: ['Switzerland'] },
  CNY: { name: 'Yuan', countries: ['China'] },
};

const Markets = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('INR'); // Default to INR
  const [allCurrencies, setAllCurrencies] = useState([]); // Store all currencies

  const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/all';

  const fetchCountryCurrencyData = async () => {
    try {
      // Fetch country and currency data
      const countryResponse = await fetch(COUNTRIES_API_URL);
      const countryData = await countryResponse.json();

      const currencyToCountryMap = {};
      countryData.forEach((country) => {
        if (country.currencies) {
          Object.keys(country.currencies).forEach((currencyCode) => {
            if (!currencyToCountryMap[currencyCode]) {
              currencyToCountryMap[currencyCode] = {
                countries: [],
                name: country.currencies[currencyCode].name,
              };
            }
            currencyToCountryMap[currencyCode].countries.push(country.name.common);
          });
        }
      });

      // Fetch exchange rates
      const CURRENCY_API_URL = `https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`;
      const currencyResponse = await fetch(CURRENCY_API_URL);
      const exchangeData = await currencyResponse.json();

      // Store all currencies in state for the dropdown
      setAllCurrencies(Object.keys(exchangeData.rates));

      // Calculate the conversion of each currency to the selected base currency
      const ratesArray = Object.entries(exchangeData.rates).map(([currency, rate]) => {
        const currencyInfo = popularCurrencies[currency] || currencyToCountryMap[currency] || { countries: ['Unknown'], name: 'Unknown' };
        return {
          currency,
          rateInSelected: `1 ${selectedCurrency} = ${rate.toFixed(2)} ${currency}`, // Value in selected base currency
          countries: currencyInfo.countries,
          name: currencyInfo.name,
        };
      });

      // Separate popular currencies and others
      const popularCurrencyArray = Object.keys(popularCurrencies).map((currency) => ({
        currency,
        rateInSelected: exchangeData.rates[currency] ? `1 ${selectedCurrency} = ${exchangeData.rates[currency].toFixed(2)} ${currency}` : 'N/A',
        countries: popularCurrencies[currency].countries,
        name: popularCurrencies[currency].name,
      }));

      const otherCurrencies = ratesArray.filter((currency) => !popularCurrencies[currency.currency]);

      setCurrencyData([
        ...popularCurrencyArray,
        ...otherCurrencies,
      ]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryCurrencyData();
    const intervalId = setInterval(fetchCountryCurrencyData, 60000);

    return () => clearInterval(intervalId);
  }, [selectedCurrency]);

  const filteredCurrencies = currencyData.filter(
    (currency) =>
      currency.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.countries.some((country) => country.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-4 max-w-6xl mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Currency Markets</h1>
      <input
        type="text"
        placeholder="Search for a currency or country..."
        className="mb-6 p-3 border border-gray-300 rounded-lg w-full md:w-1/2 mx-auto block"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mb-6 text-center">
        <label className="mr-3 font-semibold text-lg">Select Base Currency:</label>
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {allCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Currency Conversion to {selectedCurrency}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="p-4 border border-gray-200">Currency Code</th>
                  <th className="p-4 border border-gray-200">Currency Name</th>
                  <th className="p-4 border border-gray-200">Countries</th>
                  <th className="p-4 border border-gray-200">Value in {selectedCurrency}</th>
                </tr>
              </thead>
              <tbody>
                {filteredCurrencies.map((currency) => (
                  <tr key={currency.currency} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="p-4 border border-gray-200 text-lg font-semibold">
                      <FaMoneyBillWave className="inline mr-2 text-green-500" />
                      {currency.currency}
                    </td>
                    <td className="p-4 border border-gray-200">{currency.name}</td>
                    <td className="p-4 border border-gray-200">
                      <IoEarth className="inline mr-2 text-blue-500" />
                      {currency.countries.join(', ')}
                    </td>
                    <td className="p-4 border border-gray-200 text-lg font-semibold">
                      {currency.rateInSelected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Markets;






// import React, { useEffect, useState } from 'react';
// import { FaMoneyBillWave } from 'react-icons/fa'; // Icon for currency symbol
// import { IoEarth } from 'react-icons/io5'; // Icon for countries

// const popularCurrencies = {
//   INR: { name: 'Rupees', countries: ['India'] },
//   USD: { name: 'Dollar', countries: ['United States'] },
//   EUR: { name: 'Euro', countries: ['Eurozone'] },
//   GBP: { name: 'Pound', countries: ['United Kingdom'] },
//   JPY: { name: 'Yen', countries: ['Japan'] },
//   AUD: { name: 'Australian Dollar', countries: ['Australia'] },
//   CAD: { name: 'Canadian Dollar', countries: ['Canada'] },
//   CHF: { name: 'Swiss Franc', countries: ['Switzerland'] },
//   CNY: { name: 'Yuan', countries: ['China'] },
// };

// const Markets = () => {
//   const [currencyData, setCurrencyData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   const CURRENCY_API_URL = 'https://api.exchangerate-api.com/v4/latest/INR';
//   const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/all';

//   const fetchCountryCurrencyData = async () => {
//     try {
//       const countryResponse = await fetch(COUNTRIES_API_URL);
//       const countryData = await countryResponse.json();

//       const currencyToCountryMap = {};
//       countryData.forEach((country) => {
//         if (country.currencies) {
//           Object.keys(country.currencies).forEach((currencyCode) => {
//             if (!currencyToCountryMap[currencyCode]) {
//               currencyToCountryMap[currencyCode] = {
//                 countries: [],
//                 name: country.currencies[currencyCode].name,
//               };
//             }
//             currencyToCountryMap[currencyCode].countries.push(country.name.common);
//           });
//         }
//       });

//       const currencyResponse = await fetch(CURRENCY_API_URL);
//       const exchangeData = await currencyResponse.json();

//       // Calculate the conversion of each currency to INR
//       const ratesArray = Object.entries(exchangeData.rates).map(([currency, rate]) => {
//         const currencyInfo = popularCurrencies[currency] || currencyToCountryMap[currency] || { countries: ['Unknown'], name: 'Unknown' };
//         return {
//           currency,
//           rateInINR: (1 / rate).toFixed(2), // Value in INR for 1 unit of the currency
//           countries: currencyInfo.countries,
//           name: currencyInfo.name,
//         };
//       });

//       // Separate popular currencies and others
//       const popularCurrencyArray = Object.keys(popularCurrencies).map((currency) => ({
//         currency,
//         rateInINR: (1 / exchangeData.rates[currency]).toFixed(2) || 0,
//         countries: popularCurrencies[currency].countries,
//         name: popularCurrencies[currency].name,
//       }));

//       const otherCurrencies = ratesArray.filter((currency) => !popularCurrencies[currency.currency]);

//       setCurrencyData([
//         ...popularCurrencyArray,
//         ...otherCurrencies,
//       ]);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCountryCurrencyData();
//     const intervalId = setInterval(fetchCountryCurrencyData, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const filteredCurrencies = currencyData.filter(
//     (currency) =>
//       currency.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       currency.countries.some((country) => country.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="p-4 max-w-6xl mx-auto mt-20">
//       <h1 className="text-4xl font-bold mb-6 text-center">Currency Markets</h1>
//       <input
//         type="text"
//         placeholder="Search for a currency or country..."
//         className="mb-6 p-3 border border-gray-300 rounded-lg w-full md:w-1/2 mx-auto block"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="bg-white rounded-xl shadow-md p-4">
//           <h2 className="text-2xl font-semibold mb-4 text-center">Currency Conversion to INR</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse border border-gray-200">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-800">
//                   <th className="p-4 border border-gray-200">Currency Code</th>
//                   <th className="p-4 border border-gray-200">Currency Name</th>
//                   <th className="p-4 border border-gray-200">Countries</th>
//                   <th className="p-4 border border-gray-200">Value in INR</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCurrencies.map((currency) => (
//                   <tr key={currency.currency} className="hover:bg-gray-50 transition-colors duration-200">
//                     <td className="p-4 border border-gray-200 text-lg font-semibold">
//                       <FaMoneyBillWave className="inline mr-2 text-green-500" />
//                       {currency.currency}
//                     </td>
//                     <td className="p-4 border border-gray-200">{currency.name}</td>
//                     <td className="p-4 border border-gray-200">
//                       <IoEarth className="inline mr-2 text-blue-500" />
//                       {currency.countries.join(', ')}
//                     </td>
//                     <td className="p-4 border border-gray-200 text-lg font-semibold">
//                       {currency.rateInINR} 
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Markets;



