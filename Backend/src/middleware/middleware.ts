import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export interface DecodedToken {
  id: string;
}

export const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authheader = req.headers?.["authorization"];
  const decoded = jwt.verify(authheader as string, JWT_SECRET!) as DecodedToken;
  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({
      message: "You are not logged in",
    });
  }
};
