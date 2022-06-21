import express from "express";
import { protect } from "../middleware/authMiddleware";
import { setBalance } from "../controller/balanceController";

const router = express.Router();

router.post("/operation", protect, setBalance);

export default router;
