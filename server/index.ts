import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import color from "ansi-colors";

import userRoutes from "./routes/userRoutes";
import balanceRoutes from "./routes/balanceRoutes";

//Connect MongoDB
connectDB();

const app: Application = express();
dotenv.config();

const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/balance", balanceRoutes);

app.listen(PORT, (): void =>
  console.log(
    color.bgRed.black.bold(`Server is running on http://127.0.0.1:${PORT}`)
  )
);
