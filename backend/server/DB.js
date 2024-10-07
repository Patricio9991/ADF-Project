import mongoose from "mongoose"

const DB_URL = "mongodb://127.0.0.1:27017/ADF"

export const connectDB = async () => {
    try {
      await mongoose.connect(DB_URL);
      console.log("db connected",DB_URL);
    } catch (error) {
      console.log(error);
    }
  };
  