import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faUser, faCreditCard, faHandHoldingDollar, faLandmark } from "@fortawesome/free-solid-svg-icons"; // Import icons

const Home = () => {
  return (
    <div className="container mx-auto bg-slate-50 p-4 rounded-2xl">
      {/* Adjusted text size with responsive classes */}
      <div className="flex justify-start items-center text-xl md:text-2xl lg:text-3xl mb-4">
        <span>Transfer Money</span>
      </div>
      <div className="flex justify-around items-center mb-4">
        {/* Card 1 */}
        <div className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 flex flex-col items-center justify-center m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
          <Link to="/" className="text-center">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <div className="text-xs md:text-sm lg:text-base mt-2">To Mobile</div>
          </Link>
        </div>
        {/* Card 2 */}
        <div className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 flex flex-col items-center justify-center m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
          <Link to="/" className="text-center">
            <FontAwesomeIcon icon={faLandmark} size="2x" />
            <div className="text-xs md:text-sm lg:text-base mt-2">To Bank/UPI ID</div>
          </Link>
        </div>
        {/* Card 3 */}
        <div className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 flex flex-col items-center justify-center m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
          <Link to="/" className="text-center">
            <FontAwesomeIcon icon={faCreditCard} size="2x" />
            <div className="text-xs md:text-sm lg:text-base mt-2">To Self</div>
          </Link>
        </div>
        {/* Card 4 */}
        <div className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 flex flex-col items-center justify-center m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
          <Link to="/" className="text-center">
            <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
            <div className="text-xs md:text-sm lg:text-base mt-2">Check Balance</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

