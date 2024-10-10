import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import Header from "./Pages/Header.js";
import Footer from "./Pages/Footer.js";
import CurrencyConverter from "./Pages/currency-converter.js";
import Notifications from "./Pages/Notifications.js";
import HelpPage from "./Pages/HelpPage.js";
import Markets from "./Pages/Markets.js";
// import TransactionMoney from "./Pages/TransactionMoney";
import To_mobileNumber from "./Pages/To_mobileNumber.js";
import To_Bank_UPI from "./Pages/To_Bank_UPI.js";
import To_SelfAccount from "./Pages/To_SelfAccount.js";

function App() {
  return (
    <div className="bg-gray-50 h-full w-full py-20">
    <Header/>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<CurrencyConverter />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/to-mobile-number" element={<To_mobileNumber />} />
      <Route path="/to-bank-upi" element={<To_Bank_UPI />} />
      <Route path="/to-self-account" element={<To_SelfAccount />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;





