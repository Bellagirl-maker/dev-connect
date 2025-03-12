import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Job from "../models/Job";

const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: "error creating job" });
    }
});

router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: "error fetching jobs" })
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid Job ID format" });
        }

        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ error: "Job not found" });

        res.status(200).json(job);
    } catch (error) {  // <== Corrected placement of 'catch'
        res.status(500).json({ error: "Error fetching job" });
    }
});

export default router;
