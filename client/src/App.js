import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import Header from "./Pages/Header.js";
import Footer from "./Pages/Footer.js";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<div>Payment Page Placeholder</div>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;





