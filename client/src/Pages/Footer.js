import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome, faChartBar, faExchangeAlt, faWallet , faHistory} from '@fortawesome/free-solid-svg-icons'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white p-4">
      <div className="flex justify-around items-center p-4">
        <div className="flex justify-between w-full"> {/* Flex and horizontal alignment */}
          <div className="flex-1 text-center">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} size="2x" />
              <div className='mt-2'>Home</div>
            </Link>     
          </div>
          <div className="flex-1 text-center">
            <Link to="/markets">
              <FontAwesomeIcon icon={faChartBar} size="2x" />
              <div className='mt-2'>Markets</div>
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link to="/transactions">
              <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
              <div className='mt-2'>Transaction</div>
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link to="/wallets">
              <FontAwesomeIcon icon={faWallet} size="2x" />
              <div className='mt-2'>Wallets</div>
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link to="/history">
              <FontAwesomeIcon icon={faHistory} size="2x" />
              <div className='mt-2'>History</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


