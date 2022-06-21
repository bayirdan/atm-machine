import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User, { IUserRequest } from "../models/userModel";
import { Response, NextFunction } from "express";
import "dotenv/config";

export const protect = asyncHandler(
  async (req: IUserRequest, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1];

        // Verify token
        const decoded: any = jwt.verify(
          token,
          process.env.JWT_SECRET as string
        );

        // Get user from the token
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, No token");
    }
  }
);
