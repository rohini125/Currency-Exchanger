import React, { useState } from 'react';

const TwoStepVerification = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');

  // Function to simulate sending the verification code
  const sendVerificationCode = () => {
    // Simulate sending the code (you can replace this with your actual code sending logic)
    setMessage('A verification code has been sent to your registered phone number.');
    setIsVerifying(true);
  };

  // Function to verify the entered code
  const verifyCode = () => {
    // Simulate verification (you can replace this with your actual verification logic)
    if (verificationCode === '123456') { // Example verification code
      setMessage('Verification successful! You are now logged in.');
    } else {
      setMessage('Invalid verification code. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Two-Step Verification</h2>
        <p className="text-gray-600 mb-4">
          {isVerifying ? 'Enter the verification code sent to your registered phone number.' : 'To secure your account, please send a verification code.'}
        </p>
        
        {isVerifying ? (
          <>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter verification code"
              className="border border-gray-300 rounded p-2 mb-4 w-full focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={verifyCode}
              className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
              Verify Code
            </button>
          </>
        ) : (
          <button
            onClick={sendVerificationCode}
            className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            Send Verification Code
          </button>
        )}
        
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default TwoStepVerification;
