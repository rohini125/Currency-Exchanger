import React from 'react';
 
function Logout({ onLogout, onCancel }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">Logout</h1>
                <p className="text-gray-700 text-center mb-6">
                    Are you sure you want to log out?
                </p>
                <div className="flex justify-center">
                    <button
                        className="bg-red-500 text-white rounded p-2 w-32 mr-4 hover:bg-red-600"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                    <button
                        className="bg-gray-300 text-gray-700 rounded p-2 w-32 hover:bg-gray-400"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Logout;
