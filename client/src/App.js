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
import ProfilePage from "./Pages/ProfilePage.js";
import Account from "./Pages/Account.js";
import Settings from "./Pages/Settings.js";
import ChangePassword from "./Pages/Changepassword.js";
import SecurityQuestions from "./Pages/SecurityQuestions.js";



function App() {
  return (
    <div className="bg-gray-50 h-full w-full">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CurrencyConverter />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/changepassword" element={<ChangePassword />} />
         <Route path="/security-questions" element={<SecurityQuestions />} />
        
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
