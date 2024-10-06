import React from 'react';

const Account = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        balance: "$100.00",
        favoriteCurrencies: ["USD", "EUR", "GBP"],
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
                <img src=".././Assets/Profile.png" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
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
        </div>
    );
};

export default Account;
