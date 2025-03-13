import express, { Request, Response } from "express";
import Job from "../models/Job";

const router = express.Router();

// ✅ CREATE a Job (POST /api/jobs)
router.post("/", async (req: Request, res: Response) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: "Error creating job" });
  }
});

// ✅ GET All Jobs (GET /api/jobs)
router.get("/", async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching jobs" });
  }
});

// ✅ GET a Single Job by ID (GET /api/jobs/:id)
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Error fetching job" });
  }
});

// ✅ UPDATE a Job (PUT /api/jobs/:id)
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Error updating job" });
  }
});

// ✅ DELETE a Job (DELETE /api/jobs/:id)
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting job" });
  }
});

export default router;
