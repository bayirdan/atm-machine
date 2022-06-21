import { Schema, model } from "mongoose";
import { Request } from "express";

export interface IUserRequest extends Request {
  user?: any;
}

interface operationType {
  total: number;
  date: Date;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  balance: number;
  operations: operationType[] | undefined;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    operations: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
