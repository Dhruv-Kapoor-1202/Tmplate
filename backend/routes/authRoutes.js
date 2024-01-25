import express from "express";
import { registerUser, loginUser } from "../controllers/auth.js";

const router = express.Router();

// User Registration API
router.post("/registerUser", registerUser);

// User Login API
router.post("/loginUser", loginUser);

export default router;