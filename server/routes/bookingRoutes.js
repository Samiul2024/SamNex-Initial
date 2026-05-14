import express from "express"

import {
  createBooking,
  getBookings,
} from "../controllers/bookingController.js"

import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/", createBooking)

router.get("/", protect, getBookings)

export default router