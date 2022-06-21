import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User, { IUserRequest } from "../models/userModel";
import generateToken from "../utils/generateToken";
import { cryptPassword, comparePassword } from "../utils/passwordHashing";

// --description:   Register new user
// --route:         POST /api/users/
// --access:        Public
// ---------------------------------
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all field!");
    }

    // Check user if already registered
    const userRegistered = await User.findOne({ email });

    if (userRegistered) {
      res.status(400);
      throw new Error("This user already registered!");
    }

    // Password hashing
    let hashedPassword;
    await cryptPassword(password).then((res) => (hashedPassword = res));

    if (hashedPassword) {
      // Create user
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      if (user) {
        res.status(200).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user.id as string),
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
    }
  }
);

// --description:   Login user
// --route:         POST /api/users/login
// --access:        Public
// ---------------------------------
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all field!");
  }

  // Check user if already registered
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Email or password is incorrect");
  }

  let result;
  await comparePassword(password, user.password).then((res) => (result = res));

  if (result) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id as string),
    });
  } else {
    res.status(400);
    throw new Error("Email or password is incorrect");
  }
});

// --description:   Get user
// --route:         Get /api/users/me
// --access:        Private
// ---------------------------------
export const getUser = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(400);
      throw new Error("User not found!");
    }
    res.status(200).json(user);
  }
);
