import { Router } from "express";
const router = Router();
import { login } from "../controllers/authController.js";

// POST /api/authenticate - Authenticate a user
router.post("/login/create", login);

export default router;
