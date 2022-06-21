import mongoose from "mongoose";
import color from "ansi-colors";
import "dotenv/config";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const connect = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(
      color.bgYellow.black.bold(`MongoDB connected: ${connect.connection.host}`)
    );
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
