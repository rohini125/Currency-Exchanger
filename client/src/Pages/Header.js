
import React from 'react';
import { Link } from 'react-router-dom';
import { faUser,faQrcode,faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="bg-purple-900 text-white p-4">
      <div className="flex p-2">
        <div className="flex justify-between w-full p-2">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </Link>
          <Link to="/QRcode">
            <FontAwesomeIcon icon={faQrcode} size="2x" />
          </Link>
          <span className="flex">
            <input
              type="search"
              placeholder="Search"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-64 appearance-none leading-normal"
            />
            <Link to="/search" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-2 appearance-none leading-normal">
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </Link>
          </span>
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} size="2x"/>
          </Link>
          <Link to="/Login">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

