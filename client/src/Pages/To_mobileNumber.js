import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for making HTTP requests

const SendMoney = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch all world currencies
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD'); // Example API for currency list
        const currencyKeys = Object.keys(response.data.rates);
        setCurrencies(currencyKeys);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  const checkRegistration = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/users/check?mobileNumber=${mobileNumber}`);
      setIsRegistered(response.data.isRegistered);
      setLoading(false);
    } catch (error) {
      console.error('Error checking registration:', error);
      setMessage('Failed to check registration. Please try again.');
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isRegistered) {
      setMessage('The mobile number is not registered in the app.');
      return;
    }

    if (!selectedCurrency || !amount) {
      setMessage('Please select a currency and enter a valid amount.');
      return;
    }

    // Perform your send money logic here, e.g., API call
    setMessage(`Successfully sent ${amount} ${selectedCurrency} to ${mobileNumber}!`);

    // Reset fields
    setMobileNumber('');
    setSelectedCurrency('');
    setAmount('');
    setIsRegistered(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Send Money to Mobile Number</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter mobile number"
            required
          />
          <button
            type="button"
            onClick={checkRegistration}
            className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
            disabled={loading || !mobileNumber}
          >
            {loading ? 'Checking...' : 'Check Registration'}
          </button>
          {isRegistered === false && (
            <p className="mt-2 text-red-600">The mobile number is not registered in the app.</p>
          )}
          {isRegistered && (
            <p className="mt-2 text-green-600">The mobile number is registered.</p>
          )}
        </div>

        {isRegistered && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Select Currency</label>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select Currency</option>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter amount"
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          disabled={!isRegistered || !selectedCurrency}
        >
          Send Money
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default SendMoney;




// import React, { useState } from 'react';
// import axios from 'axios'; // Axios for making HTTP requests

// const SendMoney = () => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [amount, setAmount] = useState('');
//   const [message, setMessage] = useState('');
//   const [isRegistered, setIsRegistered] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const checkRegistration = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/users/check?mobileNumber=${mobileNumber}`);
//       setIsRegistered(response.data.isRegistered);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error checking registration:', error);
//       setMessage('Failed to check registration. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if (!isRegistered) {
//       setMessage('The mobile number is not registered in the app.');
//       return;
//     }

//     // Perform your send money logic here, e.g., API call
//     if (mobileNumber && amount) {
//       setMessage(`Successfully sent ₹${amount} to ${mobileNumber}!`);
//     } else {
//       setMessage('Please enter valid mobile number and amount.');
//     }

//     // Reset fields
//     setMobileNumber('');
//     setAmount('');
//     setIsRegistered(null);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold text-center mb-4">Send Money to Mobile Number</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
//           <input
//             type="text"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             placeholder="Enter mobile number"
//             required
//           />
//           <button
//             type="button"
//             onClick={checkRegistration}
//             className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
//             disabled={loading || !mobileNumber}
//           >
//             {loading ? 'Checking...' : 'Check Registration'}
//           </button>
//           {isRegistered === false && (
//             <p className="mt-2 text-red-600">The mobile number is not registered in the app.</p>
//           )}
//           {isRegistered && (
//             <p className="mt-2 text-green-600">The mobile number is registered.</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Amount</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             placeholder="Enter amount"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
//           disabled={!isRegistered}
//         >
//           Send Money
//         </button>
//       </form>
//       {message && <p className="mt-4 text-center text-red-600">{message}</p>}
//     </div>
//   );
// };

// export default SendMoney;

