import React, { useState } from 'react';

const SecurityQuestions = () => {
    const [questions, setQuestions] = useState([
        { id: 1, question: 'What is the name of your favorite currency?', answer: '' },
        { id: 2, question: 'What was the first currency you ever used?', answer: '' },
        { id: 3, question: 'What city were you in when you first exchanged currency?', answer: '' },
        { id: 4, question: 'What is your preferred currency for international travel?', answer: '' },
        { id: 5, question: 'What was the first item you purchased with foreign currency?', answer: '' },
    ]);

    const handleAnswerChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].answer = value;
        setQuestions(updatedQuestions);
    };

    const handleSaveChanges = () => {
        alert('Security questions saved successfully!');
    };

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Security Questions</h2>
            <p className="text-gray-600 mb-6">
                Please answer the security questions below for account recovery purposes.
            </p>
            <div className="space-y-4">
                {questions.map((item, index) => (
                    <div key={item.id} className="flex flex-col">
                        <label className="font-medium">{item.question}</label>
                        <input
                            type="text"
                            value={item.answer}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                            className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your answer"
                        />
                    </div>
                ))}
            </div>
            <button 
                onClick={handleSaveChanges} 
                className="mt-6 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
            >
                Save Changes
            </button>
        </div>
    );
};

export default SecurityQuestions;
