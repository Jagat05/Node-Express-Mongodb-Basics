import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
  },
  age: {
    type: Number,
    required: [true, "Student age is required"],
    min: [3, "Age must be at least 3"],
    max: [100, "Age cannot exceed 100"],
  },
  class: {
    type: String,
    required: [true, "Student class is required"],
    trim: true,
  },
  address: {
    type: String,
    trim: true,
    default: "Not Provided",
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  guardianName: {
    type: String,
    required: [true, "Guardian name is required"],
    trim: true,
  },
  enrolledDate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
