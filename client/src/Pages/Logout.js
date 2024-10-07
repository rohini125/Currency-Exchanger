import React, { useState } from 'react';
import Logout from './Logout'; // Adjust the import path as needed

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showLogout, setShowLogout] = useState(false);
    const [currentPage, setCurrentPage] = useState('home'); // Track the current page

    const handleLogout = () => {
        // Logic for logout (e.g., clearing tokens, session)
        setIsLoggedIn(false);
        alert('You have logged out successfully!');
        // Optionally, redirect to a login page or perform other actions
        setCurrentPage('home'); // Redirect to home or login
    };

    const handleCancel = () => {
        setShowLogout(false);
        setCurrentPage('settings'); // Navigate back to the settings page
    };

    return (
        <div>
            {isLoggedIn ? (
                <div className="p-4 mt-20">
                    <h1 className="text-2xl font-bold">Welcome to the Currency Converter App</h1>
                    <button
                        className="mt-4 bg-blue-500 text-white rounded p-2"
                        onClick={() => setShowLogout(true)}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <h1 className="text-2xl font-bold text-center">You are logged out</h1>
            )}

            {showLogout && (
                <Logout
                    onLogout={handleLogout}
                    onCancel={handleCancel}
                />
            )}

            {currentPage === 'settings' && (
                <div className="p-4">
                    <h2 className="text-xl font-bold">Settings Page</h2>
                    {/* Add more settings options here */}
                    <p>Settings options go here...</p>
                </div>
            )}
        </div>
    );
}

export default App;

