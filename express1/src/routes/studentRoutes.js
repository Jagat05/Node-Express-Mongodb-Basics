import express from "express";
const router = express.Router();
// const Student =require("../models/student");
import Student from "../models/student.js";

router.post("/student", async (req, res) => {
  try {
    const newstudent = await Student.create(req.body);
    res.status(201).json(newstudent);
  } catch (err) {
    res.status(500).json({ error: "Failed to create new Student !" });
  }
});

router.get("/student", async (req, res) => {
  // res.send("Hello Student!");
  try {
    const students = await Student.find();
    res.status(201).json(students);
  } catch (error) {
    res.status(501).json({ error: "Failed to get Student Data !" });
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(201).json(student);
  } catch {
    res
      .status(501)
      .json({ error: `Student with ${req.params.id} is not Available` });
  }
});
router.delete("/student/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res
        .status(404)
        .json({ error: `No student found with ID ${req.params.id}` });
    }
    res.status(200).json({
      message: `Student with ID ${req.params.id} is deleted successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      error: `Failed to delete student with ID ${req.params.id}`,
    });
  }
});
router.put("/student/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    if (!student) {
      return res
        .status(404)
        .json({ error: `No student found with ID ${req.params.id}` });
    }
    res.status(200).json({
      message: `Student with ID ${req.params.id} is Updated successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      error: `Failed to delete student with ID ${req.params.id}`,
    });
  }
});

export default router;
