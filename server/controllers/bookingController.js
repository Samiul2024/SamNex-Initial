import asyncHandler from "express-async-handler"

import Booking from "../models/Booking.js"

export const createBooking =
  asyncHandler(async (req, res) => {
    const {
      fullName,
      email,
      projectType,
      budget,
      message,
    } = req.body

    const booking = await Booking.create({
      fullName,
      email,
      projectType,
      budget,
      message,
    })

    res.status(201).json({
      success: true,
      booking,
    })
  })

export const getBookings =
  asyncHandler(async (req, res) => {
    const bookings =
      await Booking.find().sort({
        createdAt: -1,
      })

    res.json({
      success: true,
      bookings,
    })
  })