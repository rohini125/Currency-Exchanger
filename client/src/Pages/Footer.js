import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome, faChartBar, faWallet, faHistory } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-20 p-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-around items-center flex-wrap">
        <div className="flex flex-col items-center w-1/4 md:w-1/5">
          <Link to="/" className="text-center">
            <FontAwesomeIcon icon={faHome} size="2x" />
            <div className='mt-2'>Home</div>
          </Link>
        </div>
        <div className="flex flex-col items-center w-1/4 md:w-1/5">
          <Link to="/markets" className="text-center">
            <FontAwesomeIcon icon={faChartBar} size="2x" />
            <div className='mt-2'>Markets</div>
          </Link>
        </div>
        <div className="flex flex-col items-center w-1/4 md:w-1/5">
          <Link to="/wallets" className="text-center">
            <FontAwesomeIcon icon={faWallet} size="2x" />
            <div className='mt-2'>Wallets</div>
          </Link>
        </div>
        <div className="flex flex-col items-center w-1/4 md:w-1/5">
          <Link to="/history" className="text-center">
            <FontAwesomeIcon icon={faHistory} size="2x" />
            <div className='mt-2'>History</div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


