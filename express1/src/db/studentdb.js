import mongoose from "mongoose";

export async function dbconn() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Student_DB");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error);
  }
}
