import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faUser, faCreditCard, faHandHoldingDollar, faLandmark } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center text-4xl mb-4">
        <span>Transfer Money</span>
      </div>
      <div className="flex flex-wrap justify-around mb-4">
        <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
          <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
            <div className="text-center">
              <Link to="/">
                <FontAwesomeIcon icon={faUser} size="2x" />
                <div className="text-xl items-center mt-2">To Mobile Number</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
          <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
            <div className="text-center">
              <Link to="/">
                <FontAwesomeIcon icon={faLandmark} size="2x" />
                <div className="text-xl items-center mt-2">To Bank/UPI ID</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
          <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
            <div className="text-center">
              <Link to="/">
                <FontAwesomeIcon icon={faCreditCard} size="2x" />
                <div className="text-xl items-center mt-2">To Self Account</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 xl:w-1/5 p-2">
          <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
            <div className="text-center">
              <Link to="/">
                <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
                <div className="text-xl items-center mt-2">Check Balance</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Home;

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
//         <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faUser} size="3x" />
//                 <div className="text-2xl items-center mt-2">To Mobile Number</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faLandmark} size="3x" />
//                 <div className="text-2xl items-center mt-2">To Bank/UPI ID</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faCreditCard} size="3x" />
//                 <div className="text-2xl items-center mt-2">To Self Account</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
//           <div className="bg-slate-50 h-48 flex items-center justify-center m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-slate-200 hover:text-blue-500">
//             <div className="text-center">
//               <Link to="/">
//                 <FontAwesomeIcon icon={faHandHoldingDollar} size="3x" />
//                 <div className="text-2xl items-center mt-2">Check Balance</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import { faUser,faBuilding,faHandHoldingDollar, faLandmark} from '@fortawesome/free-solid-svg-icons'; // Import icons

// const Home = () => {
//     return(
//         <div className="">
//             <div className="justify-center items-center text-3xl">
//                 <div>Transfer Money</div>
//             </div>
//             <div className="flex justify-around m-4 p-2">
//                 <div className="flex justify-between w-full">
//                     <div className="flex text-center bg-slate-50 h-56 w-52 items-center m-2">
//                         <div className="text-center">
//                             <Link to="/">
//                             <FontAwesomeIcon icon={faUser} size="2x" />
//                             <div className="text-lg items-center ">To Mobile Number</div>
//                             </Link>     
//                         </div>
//                     </div>
//                     <div className="flex text-center bg-slate-50 h-56 w-52 items-center m-2">
//                         <div className="text-center">
//                                 <Link to="/">
//                                 <FontAwesomeIcon icon={faLandmark} size="2x" />
//                                 <div className="text-lg items-center ">To Bank/UPI ID</div>
//                                 </Link>     
//                         </div>
//                     </div>
//                     <div className="flex text-center bg-slate-50 h-56 w-52 items-center m-2">
//                         <div className="text-center">
//                                 <Link to="/">
//                                     <FontAwesomeIcon icon={faBuilding} size="2x" />
//                                     <div className="text-lg items-center ">To Self Account</div>
//                                 </Link>     
//                         </div>
//                     </div>
//                     <div className="flex text-center bg-slate-50 h-56 w-52 items-center m-2 ">
//                         <div className="text-center">
//                                 <Link to="/">
//                                     <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
//                                     <div className="text-lg items-center ">Check Balance</div>
//                                 </Link>     
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;