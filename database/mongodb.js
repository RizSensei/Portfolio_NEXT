import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL).then(() => {
      console.log("DB connected" + process.env.DB_URL);
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
