import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import controllers from "../controller/AnalyticController.js"; // This is where the change is made.

const router = express.Router();

// GET BLOOD DATA
router.get(
  "/bloodGroup-data",
  authMiddleware,
  controllers.bloodGroupDetailsContoller
); // Access the method using controllers.bloodGroupDetailsContoller

export default router; // This remains unchanged
