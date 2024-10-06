import React from 'react';

const ProfilePage = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        balance: "$100.00",
        favoriteCurrencies: ["USD", "EUR", "GBP"],
        transactionHistory: [
            "Converted $50 to EUR",
            "Converted $20 to GBP"
        ]
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
                <img src="profile-pic.jpg" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium">Available Balance</h3>
                <p className="text-xl">{user.balance}</p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium">Favorite Currencies</h3>
                <ul className="list-disc pl-5">
                    {user.favoriteCurrencies.map(currency => (
                        <li key={currency}>{currency}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium">Transaction History</h3>
                <ul className="list-disc pl-5">
                    {user.transactionHistory.map((transaction, index) => (
                        <li key={index}>{transaction}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium">Settings</h3>
                <button className="mt-2 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600">Manage Notifications</button>
                <button className="mt-2 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600">Account Security</button>
            </div>
        </div>
    );
};

export default ProfilePage;
