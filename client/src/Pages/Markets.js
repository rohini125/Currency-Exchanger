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

  const CURRENCY_API_URL = 'https://api.exchangerate-api.com/v4/latest/INR';
  const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/all';

  const fetchCountryCurrencyData = async () => {
    try {
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

      const currencyResponse = await fetch(CURRENCY_API_URL);
      const exchangeData = await currencyResponse.json();

      // Calculate the conversion of each currency to INR
      const ratesArray = Object.entries(exchangeData.rates).map(([currency, rate]) => {
        const currencyInfo = popularCurrencies[currency] || currencyToCountryMap[currency] || { countries: ['Unknown'], name: 'Unknown' };
        return {
          currency,
          rateInINR: (1 / rate).toFixed(2), // Value in INR for 1 unit of the currency
          countries: currencyInfo.countries,
          name: currencyInfo.name,
        };
      });

      // Separate popular currencies and others
      const popularCurrencyArray = Object.keys(popularCurrencies).map((currency) => ({
        currency,
        rateInINR: (1 / exchangeData.rates[currency]).toFixed(2) || 0,
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
  }, []);

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
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Currency Conversion to INR</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="p-4 border border-gray-200">Currency Code</th>
                  <th className="p-4 border border-gray-200">Currency Name</th>
                  <th className="p-4 border border-gray-200">Countries</th>
                  <th className="p-4 border border-gray-200">Value in INR</th>
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
                      {currency.rateInINR} 
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

//       setCurrencyData(ratesArray);
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
//     <div className="p-4 max-w-6xl mx-auto">
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
//                       {currency.rateInINR} INR
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
//   //indian currency is used as base currency and then copare all currencies to INR and find rates
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

//       const ratesArray = Object.entries(exchangeData.rates).map(([currency, rate]) => {
//         const currencyInfo = popularCurrencies[currency] || currencyToCountryMap[currency] || { countries: ['Unknown'], name: 'Unknown' };
//         return {
//           currency,
//           rate,
//           countries: currencyInfo.countries,
//           name: currencyInfo.name,
//         };
//       });

//       const popularCurrencyArray = Object.keys(popularCurrencies).map((currency) => ({
//         currency,
//         rate: exchangeData.rates[currency] || 0,
//         countries: popularCurrencies[currency].countries,
//         name: popularCurrencies[currency].name,
//       }));

//       const remainingCurrencies = ratesArray.filter((currency) => !popularCurrencies[currency.currency]);

//       setCurrencyData([
//         popularCurrencyArray.find((c) => c.currency === 'INR'),
//         ...popularCurrencyArray.filter((c) => c.currency !== 'INR'),
//         ...remainingCurrencies,
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
//     <div className="p-4 max-w-7xl mx-auto">
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
//         <>
//           <h2 className="text-2xl font-semibold mb-4 text-center">Popular Currencies</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//             {filteredCurrencies
//               .filter((currency) => Object.keys(popularCurrencies).includes(currency.currency))
//               .map((currency) => (
//                 <div
//                   key={currency.currency}
//                   className="bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 text-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <h2 className="text-2xl font-semibold flex items-center gap-2">
//                     <FaMoneyBillWave /> {currency.currency} ({currency.name})
//                   </h2>
//                   <p className="mt-2">
//                     <IoEarth className="inline-block mr-2" />
//                     Countries: {currency.countries.join(', ')}
//                   </p>
//                   <p className="mt-2 text-lg">Rate: {currency.rate.toFixed(2)}</p>
//                 </div>
//               ))}
//           </div>

//           <h2 className="text-2xl font-semibold mb-4 text-center">All Other Currencies</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredCurrencies
//               .filter((currency) => !Object.keys(popularCurrencies).includes(currency.currency))
//               .map((currency) => (
//                 <div
//                   key={currency.currency}
//                   className="bg-white border border-gray-300 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <h2 className="text-2xl font-semibold flex items-center gap-2">
//                     <FaMoneyBillWave /> {currency.currency} ({currency.name})
//                   </h2>
//                   <p className="mt-2 text-gray-700">
//                     <IoEarth className="inline-block mr-2 text-blue-500" />
//                     Countries: {currency.countries.join(', ')}
//                   </p>
//                   <p className="mt-2 text-lg text-gray-800">Rate: {currency.rate.toFixed(2)}</p>
//                 </div>
//               ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Markets;


