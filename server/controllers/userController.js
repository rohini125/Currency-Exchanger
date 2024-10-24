import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

dotenv.config();

// Register User (Arrow Function)
export const register = async (req, res) => {
  console.log("register data save ", req.body);
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      password, 
      confirmPassword, 
      contactNo,  
      identificationType, 
      identificationNumber 
    } = req.body;

    console.log("reached");
    // Password confirmation check
    // if (password !== confirmpassword) {
    //   return res.status(400).json({ error: 'Passwords do not match' });
    // }

    const hashedPassword = await bcrypt.hash(password, 10);
    const registerUser = new userModel({
      firstName,
      lastName,
      email,
      password,
      contactNo,
      identificationType,
      identificationNumber
    });

    console.log(registerUser)

    await registerUser.save();
    // res.status(201).json({ message: 'User registered successfully!' });
    res.json({
      success: true,
      data: registerUser,
      message: "User registered successfully",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });  }
};