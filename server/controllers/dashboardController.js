import asyncHandler from "express-async-handler"

import Booking from "../models/Booking.js"
import Project from "../models/Project.js"

export const getDashboardStats =
  asyncHandler(async (req, res) => {
    const totalBookings =
      await Booking.countDocuments()

    const totalProjects =
      await Project.countDocuments()

    const completedProjects =
      await Project.countDocuments({
        status: "completed",
      })

    const activeProjects =
      await Project.countDocuments({
        status: "in_progress",
      })

    const planningProjects =
      await Project.countDocuments({
        status: "planning",
      })

    res.json({
      success: true,

      stats: {
        totalBookings,
        totalProjects,
        completedProjects,
        activeProjects,
        planningProjects,
      },
    })
  })