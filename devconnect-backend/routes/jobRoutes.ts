import express, { Request, Response } from "express";
import Job from "../models/Job";

const router = express.Router();

// ✅ Create a new job
router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description, company } = req.body;
    if (!title || !description || !company) {
       res.status(400).json({ message: "All fields are required" });
    }

    const newJob = new Job({ title, description, company });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// ✅ Get all jobs
router.get("/", async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


export default router;
