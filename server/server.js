// server.js
// import express from 'express';
// import mongoose from 'mongoose';
// import connectDB from "./db/index.js";
// import userRoute from ".routes/userRoute.js";
// import register from "./controllers/userController.js";
// import dotenv from "dotenv";
// import cors from "cors";
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/index.js');
const userRoute = require('./routes/userRoute.js');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const PORT = process.env.PORT;
 
// Middleware
app.use(express.json());

// app.use("/newuser", contactRoute);

app.use("/users", userRoute);

connectDB();


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});