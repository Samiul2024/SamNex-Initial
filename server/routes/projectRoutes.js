import express from "express"

import {
  createProject,
  getProjects,
  updateProjectStatus,
} from "../controllers/projectController.js"

import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/", getProjects)

router.post("/", protect, createProject)

router.put(
  "/:id",
  protect,
  updateProjectStatus
)

export default router