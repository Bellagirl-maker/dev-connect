import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"

export interface AuthRequest extends Request { 
    user?: any;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" })
    }

};
