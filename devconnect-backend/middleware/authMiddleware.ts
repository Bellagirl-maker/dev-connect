import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"

export interface AuthRequest extends Request { 
    user?: any;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];
}