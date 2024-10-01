import React from 'react';
import { Link } from 'react-router-dom';
import { faSquare, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header className="bg-gray-100 p-4" style={{ display: 'flex' }}>
            <div style={{ display: 'flex', border: '2px solid blue', padding: '1rem' }}>
                <div className="flex">
                    <span className="ml-40 mr-40">
                        <Link to="/profile">
                            <FontAwesomeIcon icon={faSquare} className="text-lg text-gray-600 ml-40 mr-4" />
                        </Link>
                    </span>
                    <span className="ml-40 mr-40">
                        <input
                            type="search"
                            placeholder="Search"
                            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-64 appearance-none leading-normal"
                        />
                        <Link to="/search">
                            <FontAwesomeIcon icon={faSearch} className="text-lg text-gray-600 ml-2" />
                        </Link>
                    </span>
                    <span className="ml-40">
                        <Link to="/notifications">
                            <FontAwesomeIcon icon={faBell} className="text-lg text-gray-600 ml-4" />
                        </Link>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;  