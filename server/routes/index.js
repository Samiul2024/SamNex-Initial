import express from "express"

import authRoutes from "./authRoutes.js"
import bookingRoutes from "./bookingRoutes.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SamNex API Running",
  })
})

router.use("/auth", authRoutes)

router.use("/bookings", bookingRoutes)

export default router