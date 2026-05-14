import asyncHandler from "express-async-handler"

import Project from "../models/Project.js"

export const createProject =
  asyncHandler(async (req, res) => {
    const {
      title,
      category,
      description,
      technologies,
      liveLink,
      githubLink,
      thumbnail,
      featured,
    } = req.body

    const project = await Project.create({
      title,
      category,
      description,
      technologies,
      liveLink,
      githubLink,
      thumbnail,
      featured,
    })

    res.status(201).json({
      success: true,
      project,
    })
  })

export const getProjects =
  asyncHandler(async (req, res) => {
    const projects =
      await Project.find().sort({
        createdAt: -1,
      })

    res.json({
      success: true,
      projects,
    })
  })

export const updateProjectStatus =
  asyncHandler(async (req, res) => {
    const project =
      await Project.findById(
        req.params.id
      )

    if (!project) {
      res.status(404)

      throw new Error(
        "Project not found"
      )
    }

    project.status =
      req.body.status ||
      project.status

    const updated =
      await project.save()

    res.json({
      success: true,
      updated,
    })
  })