import express from "express"

import authRoutes from "./authRoutes.js"
import bookingRoutes from "./bookingRoutes.js"
import projectRoutes from "./projectRoutes.js"
import uploadRoutes from "./uploadRoutes.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SamNex API Running",
  })
})

router.use("/auth", authRoutes)

router.use("/bookings", bookingRoutes)

router.use("/projects", projectRoutes)

router.use("/upload", uploadRoutes)

export default router