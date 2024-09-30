import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome, faChartBar, faExchangeAlt, faWallet } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4">
      <div className="flex justify-center items-center border-2 border-blue-500 p-4">
        <div className="flex justify-around w-full max-w-xl"> {/* Flex and horizontal alignment */}
          <div className="text-center">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} size="2x" />
              <div>Home</div>
            </Link>     
          </div>
          <div className="text-center">
            <Link to="/markets">
              <FontAwesomeIcon icon={faChartBar} size="2x" />
              <div>Markets</div>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/transactions">
              <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
              <div>Transaction</div>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/wallets">
              <FontAwesomeIcon icon={faWallet} size="2x" />
              <div>Wallets</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <Link to="/history">
              <div>History</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;