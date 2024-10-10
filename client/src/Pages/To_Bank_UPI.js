import React, { useState } from 'react';
import axios from 'axios';

const SendMoney = () => {
    const [selectedSection, setSelectedSection] = useState('bankAccount');
    const [accountNumber, setAccountNumber] = useState('');
    const [upiId, setUpiId] = useState('');
    const [upiNumber, setUpiNumber] = useState('');
    const [amount, setAmount] = useState('');

    // Function to check if the recipient is registered
    const checkRegistration = async (recipientIdentifier) => {
        try {
            const response = await axios.post('http://localhost:3000/api/check-registration', {
                recipientIdentifier,
            });
            return response.data.isRegistered; // assuming the response has an `isRegistered` field
        } catch (error) {
            console.error('Error checking registration:', error);
            return false; // Default to false if there's an error
        }
    };

    // Function to handle money transfer to a bank account
    const handleTransferBank = async (e) => {
        e.preventDefault();
        const isRegistered = await checkRegistration(accountNumber);
        if (!isRegistered) {
            alert('The recipient is not registered. Please check the account number.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/transfer', {
                accountNumber,
                amount,
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error transferring money:', error);
            alert('Transfer failed. Please try again.');
        }
    };

    // Function to handle money transfer to a UPI ID
    const handleTransferUPI = async (e) => {
        e.preventDefault();
        const isRegistered = await checkRegistration(upiId);
        if (!isRegistered) {
            alert('The recipient is not registered. Please check the UPI ID.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/transfer', {
                upiId,
                amount,
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error transferring money:', error);
            alert('Transfer failed. Please try again.');
        }
    };

    // Function to handle money transfer to a UPI Number
    const handleTransferUPINumber = async (e) => {
        e.preventDefault();
        const isRegistered = await checkRegistration(upiNumber);
        if (!isRegistered) {
            alert('The recipient is not registered. Please check the UPI Number.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/transfer', {
                upiNumber,
                amount,
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error transferring money:', error);
            alert('Transfer failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="p-4 shadow-md bg-white">
                <div className="container mx-auto flex justify-around">
                    <button
                        onClick={() => setSelectedSection('bankAccount')}
                        className={`text-lg font-semibold p-3 transition duration-300 ${
                            selectedSection === 'bankAccount' ? 'border-b-2 border-blue-600' : 'text-gray-800'
                        }`}
                    >
                        Bank Account
                    </button>
                    <button
                        onClick={() => setSelectedSection('upiId')}
                        className={`text-lg font-semibold p-3 transition duration-300 ${
                            selectedSection === 'upiId' ? 'border-b-2 border-blue-600' : 'text-gray-800'
                        }`}
                    >
                        UPI ID
                    </button>
                    <button
                        onClick={() => setSelectedSection('upiNumber')}
                        className={`text-lg font-semibold p-3 transition duration-300 ${
                            selectedSection === 'upiNumber' ? 'border-b-2 border-blue-600' : 'text-gray-800'
                        }`}
                    >
                        UPI Number
                    </button>
                </div>
            </nav>

            {/* Conditional Rendering of Forms */}
            <div className="flex items-center justify-center py-10">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4">
                    {selectedSection === 'bankAccount' && (
                        <div>
                            <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600 sm:text-lg">
                                Send Money to Bank Account
                            </h2>
                            <form onSubmit={handleTransferBank}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Account Number
                                    </label>
                                    <input
                                        type="text"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        placeholder="Enter bank account number"
                                        className="w-full p-3 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Amount
                                    </label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="w-full p-3 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                >
                                    Send Money to Bank Account
                                </button>
                            </form>
                        </div>
                    )}

                    {selectedSection === 'upiId' && (
                        <div>
                            <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600 sm:text-lg">
                                Send Money to UPI ID
                            </h2>
                            <form onSubmit={handleTransferUPI}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">UPI ID</label>
                                    <input
                                        type="text"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                        placeholder="Enter UPI ID"
                                        className="w-full p-3 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="w-full p-3 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                >
                                    Send Money to UPI ID
                                </button>
                            </form>
                        </div>
                    )}

                    {selectedSection === 'upiNumber' && (
                        <div>
                            <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600 sm:text-lg">
                                Send Money to UPI Number
                            </h2>
                            <form onSubmit={handleTransferUPINumber}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">UPI Number</label>
                                    <input
                                        type="text"
                                        value={upiNumber}
                                        onChange={(e) => setUpiNumber(e.target.value)}
                                        placeholder="Enter UPI Number"
                                        className="w-full p-3 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="w-full p-3 border rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                >
                                    Send Money to UPI Number
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SendMoney;
