import { Response } from "express";
import asyncHandler from "express-async-handler";
import User, { IUserRequest } from "../models/userModel";

export const setBalance = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const { total } = req.body;

    if (!total) {
      res.status(400);
      throw new Error("Add some amount");
    }

    const user = await User.findOne({ email: req.user.email });

    // Check user
    if (!user) {
      res.status(400);
      throw new Error("Not authorized");
    }

    // Check balance if balance < 0
    if (user.balance + total < 0) {
      res.status(400);
      throw new Error("Insufficient balance");
    }

    // Change balance and add operation
    user.balance += total;
    user.operations?.push({ total, date: new Date() });
    user.save();
    res.status(200).json(user);
  }
);
