import asyncHandler from "express-async-handler"

import cloudinary from "../config/cloudinary.js"

export const uploadImage =
  asyncHandler(async (req, res) => {
    if (!req.file) {
      res.status(400)

      throw new Error(
        "No image uploaded"
      )
    }

    const b64 = Buffer.from(
      req.file.buffer
    ).toString("base64")

    const dataURI = `data:${req.file.mimetype};base64,${b64}`

    const uploaded =
      await cloudinary.uploader.upload(
        dataURI,
        {
          folder: "samnex",
        }
      )

    res.json({
      success: true,
      imageUrl:
        uploaded.secure_url,
    })
  })