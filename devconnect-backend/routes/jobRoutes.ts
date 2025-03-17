import express, { Request, Response } from "express";
import Job from "../models/Job";

const router = express.Router();

// ✅ Create a new job
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log("Incoming request body:", req.body); // ✅ Log request body

    const { title, description, company, salary, location } = req.body;

    if (!title || !description || !company || !salary || !location) {
      res.status(400).json({ message: "All fields are required" }); // ✅ Add return to stop execution
    }

    const newJob = new Job({ title, description, company, salary, location }); // ✅ Include all fields
    await newJob.save();

    res.status(201).json(newJob);
  } catch (error: any) {
    console.error("❌ Error creating job:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
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


router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { title, description, company, salary, location } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { title, description, company, salary, location },
      { new: true, runValidators: true }
    );
  
    if (!updatedJob) {
      res.status(404).json({ message: "Job not found" });
    }
    res.json(updatedJob);
  } catch (error: any) {
    console.error("Error updating job:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }

});

export default router;
