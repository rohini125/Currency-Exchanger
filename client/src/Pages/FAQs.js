import React, { useState } from 'react';

const faqs = [
    {
        question: "What is a currency converter?",
        answer: "A currency converter is a tool that allows you to convert one currency into another based on current exchange rates."
    },
    {
        question: "How do I use the currency converter?",
        answer: "Simply enter the amount you want to convert, select the source currency and the target currency, and click 'Convert'."
    },
    {
        question: "Are the exchange rates up-to-date?",
        answer: "Yes, we fetch the latest exchange rates from reliable financial sources to ensure accuracy."
    },
    {
        question: "Is there a limit to the amount I can convert?",
        answer: "No, there is no limit to the amount you can convert, but please check for any transaction fees that may apply."
    },
    {
        question: "Can I convert multiple currencies at once?",
        answer: "Currently, the app supports one conversion at a time. You can repeat the process for multiple conversions."
    },
    {
        question: "What should I do if the exchange rate is not displaying?",
        answer: "If the exchange rate does not display, please check your internet connection or try refreshing the app."
    },
    {
        question: "Is the currency converter available offline?",
        answer: "No, the currency converter requires an internet connection to fetch real-time exchange rates."
    },
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="w-full text-left text-lg font-semibold text-blue-500 hover:underline focus:outline-none"
                            onClick={() => toggleAnswer(index)}
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQs;
