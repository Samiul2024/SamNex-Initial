import express from "express"

import authRoutes from "./authRoutes.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SamNex API Running",
  })
})

router.use("/auth", authRoutes)

export default router