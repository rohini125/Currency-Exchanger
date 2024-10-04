import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import Header from "./Pages/Header.js";
import Footer from "./Pages/Footer.js";
import CurrencyConverter from "./Pages/currency-converter.js";
import Markets from "./Pages/Markets.js";
import HelpPage from "./Pages/HelpPage.js";
import Notifications from "./Pages/Notifications.js"

function App() {
  return (
    <div className="bg-gray-50 h-full w-full">
    <Header/>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<CurrencyConverter />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;





// import React from "react";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import { faUser, faCreditCard, faHandHoldingDollar, faLandmark } from '@fortawesome/free-solid-svg-icons'; // Import icons

// const Home = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-center items-center text-4xl mb-4">
//         <span>Transfer Money</span>
//       </div>
//       <div className="flex flex-wrap justify-around mb-4">
//         <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faUser} size="2x" />
//                 <div className="text-xl items-center mt-2">To Mobile Number</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faLandmark} size="2x" />
//                 <div className="text-xl items-center mt-2">To Bank/UPI ID</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faCreditCard} size="2x" />
//                 <div className="text-xl items-center mt-2">To Self Account</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
//                 <div className="text-xl items-center mt-2">Check Balance</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>  
//   );
// };