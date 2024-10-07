import React, { useState } from 'react';
import axios from 'axios';

function ContactSupport() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your API endpoint
            await axios.post('http://localhost:3000/contact-support', { name, email, message });
            setSuccessMessage('Your message has been sent successfully!');
            setErrorMessage('');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setErrorMessage('Failed to send your message. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Contact Support</h1>
                {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
                {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded p-2 w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactSupport;
