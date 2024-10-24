import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },

  lastName: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: false,
    unique: true,
  },

  password: {
    type: String,
    required: false,
  },

  contactNo: {
    type: Number,
    required: false,
  },

  identificationType: {
    type: String,
    required: false,
  },

  identificationNumber: {
    type: Number,
    required: false,
  }
});

const userModel= mongoose.model("User", UserSchema );
export default userModel;