import express from "express";
import jobRoutes from "./routes/jobRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
    res.send("API is running...");
  });

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB cnnection error", err))

app.get("/", (req, res) => {
    res.send("Welcome to DevConnect API")
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})