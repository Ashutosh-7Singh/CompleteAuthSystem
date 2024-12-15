import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectDB = async () => {
  try {
    console.log("mongo_uri:", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log("Error connecton to MongoDB:", err.message);
    process.exit(1); //failure ,0 status code is for sucess
  }
};

// Moni@1234
// mongodb+srv://CompleteAuthSystem:Moni@1234@cluster0.dkw4v.mongodb.net/
