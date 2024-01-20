import express from "express";
import { adminMiddleware } from "../middlewares/AdminMiddleware.js";
import {
  deleteDonarController,
  deleteHospitalController,
  getDonarListController,
  getHospitalListController,
  getOrgListController,
} from "../controller/AdminController.js"; // Default import
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);
//get || hospital
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);
//get organisation
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);
//delete donar
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
router.delete(
  "/delete-hospital/:id",
  authMiddleware,
  adminMiddleware,
  deleteHospitalController
);

export default router;
