import {
  registerController,
  loginController,
  currentUserController,
} from "../controller/authController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import express from "express";

const router = express.Router();

// routes
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/current-user", authMiddleware, currentUserController);

export default router;
