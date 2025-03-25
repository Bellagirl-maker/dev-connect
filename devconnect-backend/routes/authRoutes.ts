import express, { Request, Response, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { authenticate } from '../middleware/authMiddleware';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Register Route
router.post('/register', async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password });
        await user.save();

         res.status(201).json({ message: 'User registered successfully' });
    } catch (error: any) {
         res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Login Route
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }) as { _id: string, comparePassword: (password: string) => Promise<boolean>, name: string, email: string };
        if (!user) {
         res.status(400).json({ message: 'Invalid credentials' });
        }

        // Ensure comparePassword exists before calling it
        if (typeof user.comparePassword !== 'function') {
         res.status(500).json({ message: 'User model method comparePassword is missing' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
         res.status(400).json({ message: 'Password does not match' });
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
              res.status(500).json({ message: "JWT_SECRET is missing" });
        }

        const token = jwt.sign({ id: user._id.toString() }, secret as string, { expiresIn: "1h" });

         res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error: any) {
     res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Extend Request type to include user
interface AuthRequest extends Request {
    user?: { id: string };
}

// Get Current User Route
router.get("/me", authenticate as RequestHandler, async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user?.id) {
             res.status(401).json({ message: "Unauthorized" });
        }

        if (!req.user) {
             res.status(401).json({ message: "Unauthorized" });
        }
        if (!req.user) {
             res.status(401).json({ message: "Unauthorized" });
        }
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
             res.status(404).json({ message: "User not found" });
        }

         res.json(user);
    } catch (error: any) {
     res.status(500).json({ message: "Server Error", error: error.message });
    }
});

export default router;
