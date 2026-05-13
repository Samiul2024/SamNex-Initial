import asyncHandler from "express-async-handler"

import Admin from "../models/Admin.js"

import generateToken from "../utils/generateToken.js"

export const loginAdmin =
  asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const admin = await Admin.findOne({
      email,
    })

    if (
      admin &&
      (await admin.matchPassword(password))
    ) {
      res.json({
        success: true,

        token: generateToken(admin._id),

        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
        },
      })
    } else {
      res.status(401)

      throw new Error("Invalid credentials")
    }
  })