import asyncHandler from "express-async-handler"

import Project from "../models/projectModel.js"

export const getProjects =
  asyncHandler(
    async (
      req,
      res
    ) => {
      const projects =
        await Project.find().sort({
          createdAt: -1,
        })

      res.json({
        success: true,
        count:
          projects.length,
        projects,
      })
    }
  )

export const createProject =
  asyncHandler(
    async (
      req,
      res
    ) => {
      const {
        title,
        category,
        description,
        image,
        liveUrl,
        techStack,
        featured,
      } = req.body

      const project =
        await Project.create({
          title,
          category,
          description,
          image,
          liveUrl,
          techStack,
          featured,
        })

      res.status(201).json({
        success: true,
        project,
      })
    }
  )

export const updateProject =
  asyncHandler(
    async (
      req,
      res
    ) => {
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

      Object.assign(
        project,
        req.body
      )

      const updatedProject =
        await project.save()

      res.json({
        success: true,
        project:
          updatedProject,
      })
    }
  )

export const deleteProject =
  asyncHandler(
    async (
      req,
      res
    ) => {
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

      await project.deleteOne()

      res.json({
        success: true,
        message:
          "Project deleted",
      })
    }
  )