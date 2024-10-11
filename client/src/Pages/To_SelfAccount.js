// src/SendMoney.js
import React, { useState } from 'react';

const SendMoney = () => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [recipientId, setRecipientId] = useState(''); // State for recipient account
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state

    const handleTransfer = async () => {
        setSuccess(null);
        setError(null);

        if (!amount || amount <= 0) {
            setError('Invalid amount');
            return;
        }

        setLoading(true); // Start loading

        try {
            const response = await fetch('/api/send-money', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, message, recipientId }),
            });
            const data = await response.json();
            if (response.ok) {
                setSuccess(data.message);
                setAmount('');
                setMessage('');
                setRecipientId(''); // Reset recipientId
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('Server error');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Send Money</h2>
                <input
                    type="text"
                    placeholder="Enter Recipient Account ID"
                    value={recipientId}
                    onChange={(e) => setRecipientId(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                />
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                />
                <textarea
                    placeholder="Add a message (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                />
                {success && <div className="text-green-600 mb-2">{success}</div>}
                {error && <div className="text-red-600 mb-2">{error}</div>}
                <button
                    onClick={handleTransfer}
                    className={`bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading} // Disable button while loading
                >
                    {loading ? 'Transferring...' : 'Transfer'}
                </button>
            </div>
        </div>
    );
};

export default SendMoney;
