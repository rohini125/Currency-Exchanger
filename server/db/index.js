import mongoose from "mongoose";
import dotenv from 'dotenv'
 
dotenv.config();

const connectDB = async () => {
  // MongoDB connection
  try {
    console.log('mongodb string',process.env.MONGODB_URI)
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) 
    if(connection){
      console.log("MongoDB connected ");
    }
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

}
export default connectDB;