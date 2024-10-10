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
import To_mobileNumber from "./Pages/To_mobileNumber.js";
import To_Bank_UPI from "./Pages/To_Bank_UPI.js";
import To_SelfAccount from "./Pages/To_SelfAccount.js";
//////////////////
import ProfilePage from "./Pages/ProfilePage.js";
import Account from "./Pages/Account.js";
import Settings from "./Pages/Settings.js";import ChangePassword from "./Pages/Changepassword.js";
import SecurityQuestions from "./Pages/SecurityQuestions.js";
import TwoFactorAuthentication from "./Pages/TwoFactorAuthentication.js";
import ContactSupport from "./Pages/ContactSupport.js";
import FAQs from "./Pages/FAQs.js";
import Logout from "./Pages/Logout.js"

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
      <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/security-questions" element={<SecurityQuestions />} />
        <Route path="/two-factor-authentication" element={<TwoFactorAuthentication />}/>
        <Route path="/contact-support" element={< ContactSupport/>}/>
        <Route path="/faqs" element={<FAQs/>}/> 
        <Route path="/logout" element={<Logout/>}/>
    </Routes>
    <Footer/>
    </div> 
  );
}

export default App;




