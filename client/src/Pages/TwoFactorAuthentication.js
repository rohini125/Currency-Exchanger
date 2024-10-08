import React, { useState } from 'react';
import axios from 'axios';

function TwoFactorAuthentication() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/register', { username, password, phone });
            alert('User registered');
            setIsRegistering(false);
        } catch (error) {
            alert('Registration failed. Please try again.');
        }
    };

    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:5000/login', { username, password });
            alert('Check your SMS for the 2FA code');
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    const handleVerify = async () => {
        try {
            const response = await axios.post('http://localhost:5000/verify', { username, code });
            alert(response.data.message);
            setIsLoggedIn(true);
        } catch (error) {
            alert('Verification failed. Please check the code.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-96">
                <h1 className="text-2xl font-bold text-center mb-4">{isRegistering ? 'Register' : 'Login'}</h1>
                {!isLoggedIn ? (
                    <>
                        {isRegistering ? (
                            <>
                                <input
                                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder="Username"
                                />
                                <input
                                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                                <input
                                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                />
                                <button
                                    className="bg-blue-500 text-white rounded p-2 w-full mb-2"
                                    onClick={handleRegister}
                                >
                                    Register
                                </button>
                                <button
                                    className="text-blue-500 underline w-full"
                                    onClick={() => setIsRegistering(false)}
                                >
                                    Back to Login
                                </button>
                            </>
                        ) : (
                            <>
                                <input
                                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder="Username"
                                />
                                <input
                                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                                <button
                                    className="bg-blue-500 text-white rounded p-2 w-full mb-2"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                                <button
                                    className="text-blue-500 underline w-full"
                                    onClick={() => setIsRegistering(true)}
                                >
                                    Register
                                </button>

                                <h1 className="text-lg font-semibold mt-4">Verify 2FA</h1>
                                <input
                                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                                    value={code}
                                    onChange={e => setCode(e.target.value)}
                                    placeholder="Enter 2FA code"
                                />
                                <button
                                    className="bg-blue-500 text-white rounded p-2 w-full"
                                    onClick={handleVerify}
                                >
                                    Verify
                                </button>
                            </>
                        )}
                    </>
                ) : (
                    <h2 className="text-xl text-center">Welcome, {username}!</h2>
                )}
            </div>
        </div>
    );
}

export default TwoFactorAuthentication;
