import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register.js";
import Login from "./pages/Login/Login.js";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<div>Payment Page Placeholder</div>} />
    </Routes>
  );
}

export default App;





