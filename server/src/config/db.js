import mongoose from "mongoose";
import { getMongoUri } from "./env.js";

export const connectDb = async () => {
  const uri = getMongoUri();
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("MongoDB connected");
};
