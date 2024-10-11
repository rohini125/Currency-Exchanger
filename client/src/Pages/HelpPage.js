import React from 'react';

const HelpPage = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Help Center</h1>
        {/* <input
          type="text"
          placeholder="Search for help..."
          className="mt-4 p-3 border border-gray-300 rounded shadow-md w-full max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">Sending Money</h3>
            <p className="mt-2 text-gray-600">Learn how to quickly and securely send money to anyone.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">Account Setup</h3>
            <p className="mt-2 text-gray-600">Step-by-step guide to create and set up your account.</p>
          </div>
          {/* <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">KYC Verification</h3>
            <p className="mt-2 text-gray-600">Understand the KYC process to keep your account secure.</p>
          </div> */}
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">Transaction Issues</h3>
            <p className="mt-2 text-gray-600">Find solutions for common transaction problems.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Account Questions</h3>
            <div className="mt-2 p-4 bg-white rounded-lg shadow">
              <strong>How do I create an account?</strong>
              <p>Download the app, select "Login," and follow the prompts.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Transaction Questions</h3>
            <div className="mt-2 p-4 bg-white rounded-lg shadow">
              <strong>How can I send money?</strong>
              <p>Navigate to the "Transfer Money" section, enter the recipient’s details, and confirm the transaction.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Security Questions</h3>
            <div className="mt-2 p-4 bg-white rounded-lg shadow">
              <strong>How do I keep my account secure?</strong>
              <p>Enable two-factor authentication and regularly update your password.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Step-by-Step Guides</h2>
        <div className="mt-2 p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold">How to Transfer Money:</h3>
          <ol className="list-decimal ml-5 mt-2">
            <li>Open the app and log in.</li>
            <li>Go to "Transfer Money."</li>
            <li>Enter recipient details and amount.</li>
            <li>Confirm the transaction.</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contact Support</h2>
        <p>If you have any questions or need assistance, please reach out to us:</p>
        <ul className="list-none ml-5">
          <li className="mt-2">Phone: <span className="font-semibold">[Customer Support Number]</span></li>
          <li className="mt-2">Email: <span className="font-semibold">[Support Email]</span></li>
          <li className="mt-2">Chat: Available in the app.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Feedback</h2>
        <p>We value your feedback! Let us know how we can improve:</p>
        <form className="mt-4">
          <textarea
            placeholder="Your feedback..."
            className="p-3 border border-gray-300 rounded w-full h-24 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-2 mb-20 px-5 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default HelpPage;



