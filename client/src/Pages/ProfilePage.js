import React, { useState } from 'react';

const ProfilePage = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        balance: "$100.00",
        favoriteCurrencies: ["USD", "EUR", "GBP"],
        transactionHistory: [
            "Converted $50 to EUR",
            "Converted $20 to GBP"
        ]
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedEmail, setEditedEmail] = useState(user.email);
    const [editedCurrencies, setEditedCurrencies] = useState(user.favoriteCurrencies.join(", ")); // Comma-separated for easy editing

    const handleSaveChanges = () => {
        setUser(prevUser => ({
            ...prevUser,
            name: editedName,
            email: editedEmail,
            favoriteCurrencies: editedCurrencies.split(",").map(currency => currency.trim()), // Split and trim to get an array
        }));
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    return (
        <div className="max-w-sm mx-auto mt-20 mb-20 bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
                <img src="..\.\page\Assets\Profile.png" alt={`${user.name}'s profile`} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
            </div>

            {isEditing ? (
                <div className="mt-6">
                    <h3 className="text-lg font-medium">Edit Profile</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleSaveChanges(); }}>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input 
                                type="text" 
                                value={editedName} 
                                onChange={(e) => setEditedName(e.target.value)} 
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                value={editedEmail} 
                                onChange={(e) => setEditedEmail(e.target.value)} 
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Favorite Currencies (comma separated)</label>
                            <input 
                                type="text" 
                                value={editedCurrencies} 
                                onChange={(e) => setEditedCurrencies(e.target.value)} 
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                                placeholder="USD, EUR, GBP"
                            />
                        </div>
                        <button type="submit" className="mt-6 mb-20 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200">
                            Save Changes
                        </button>
                    </form>
                </div>
            ) : (
                <>
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
                    <div className='mt-4 mb-20'>
                        <button onClick={() => setIsEditing(true)} className="mt-6 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200">
                            Edit Profile
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfilePage;
