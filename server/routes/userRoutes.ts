import express from "express";
import { registerUser, loginUser, getUser } from "../controller/userController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/me", protect, getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
