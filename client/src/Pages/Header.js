import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiHelpCircle, FiUser } from 'react-icons/fi';
import { MdQrCode } from 'react-icons/md'; // Importing QR code icon from Material Design

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Profile Icon and QR Code Icon */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleProfile} className="text-white flex items-center focus:outline-none">
            <FiUser className="h-6 w-6" />
          </button>
          <button className="text-white flex items-center focus:outline-none">
            <MdQrCode className="h-6 w-6" />
          </button>
          {profileOpen && (
            <div className="absolute left-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
              <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account</Link>
              <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
              <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</Link>
            </div>
          )}
        </div>

        {/* Right Icons (Notification and Help) - Always Visible */}
        <div className="flex space-x-6 items-center">
          <Link to="/notification" className="flex items-center text-white hover:underline">
            <FiBell className="h-5 w-5" />
          </Link>
          <Link to="/help" className="flex items-center text-white hover:underline">
            <FiHelpCircle className="h-5 w-5" />
          </Link>
          {/* Login Button */}
          <Link
            to="/login"
            className="flex items-center text-white hover:underline bg-blue-700 px-4 py-2 rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;






// import React, { useState } from 'react';
// import { FiBell, FiHelpCircle, FiUser } from 'react-icons/fi';
// import { MdQrCode } from 'react-icons/md'; // Importing QR code icon from Material Design

// const Header = () => {
//   const [profileOpen, setProfileOpen] = useState(false);

//   const toggleProfile = () => {
//     setProfileOpen(!profileOpen);
//   };

//   return (
//     <nav className="bg-blue-600 p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center relative">
//         {/* Profile Icon and QR Code Icon */}
//         <div className="flex items-center space-x-4">
//           <button onClick={toggleProfile} className="text-white flex items-center focus:outline-none">
//             <FiUser className="h-6 w-6" />
//           </button>
//           <button className="text-white flex items-center focus:outline-none">
//             <MdQrCode className="h-6 w-6" />
//           </button>
//           {profileOpen && (
//             <div className="absolute left-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
//               <a href="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account</a>
//               <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
//               <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
//             </div>
//           )}
//         </div>

//         {/* Right Icons (Notification and Help) - Always Visible */}
//         <div className="flex space-x-6 items-center">
//           <a href="/notification" className="flex items-center text-white hover:underline">
//             <FiBell className="h-5 w-5" />
//           </a>
//           <a href="/help" className="flex items-center text-white hover:underline">
//             <FiHelpCircle className="h-5 w-5" />
//           </a>
//           {/* Login Button */}
//           <a
//             href="/login"
//             className="flex items-center text-white hover:underline bg-blue-700 px-4 py-2 rounded-md"
//           >
//             Login
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

