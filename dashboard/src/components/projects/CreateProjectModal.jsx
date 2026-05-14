import { useState } from "react"

import toast from "react-hot-toast"

import {
  createProject,
} from "../../services/projectService"

const CreateProjectModal = ({
  closeModal,
  refreshProjects,
}) => {
  const admin = JSON.parse(
    localStorage.getItem("admin")
  )

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      description: "",
      technologies: "",
      liveLink: "",
      githubLink: "",
      thumbnail: "",
      featured: false,
    })

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await createProject(
        {
          ...formData,
          technologies:
            formData.technologies
              .split(",")
              .map((tech) =>
                tech.trim()
              ),
        },
        admin.token
      )

      toast.success(
        "Project created"
      )

      refreshProjects()

      closeModal()
    } catch (error) {
      toast.error(
        "Failed to create project"
      )
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-secondary p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black">
            Create Project
          </h2>

          <button
            onClick={closeModal}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />

          <input
            type="text"
            name="technologies"
            placeholder="React, Node, MongoDB"
            value={
              formData.technologies
            }
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />

          <input
            type="text"
            name="liveLink"
            placeholder="Live URL"
            value={formData.liveLink}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />

          <input
            type="text"
            name="githubLink"
            placeholder="Github URL"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />

          <input
            type="text"
            name="thumbnail"
            placeholder="Thumbnail URL"
            value={formData.thumbnail}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-dark p-4 outline-none"
          />

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={
                formData.featured
              }
              onChange={handleChange}
            />

            Featured Project
          </label>

          <button className="w-full rounded-xl bg-primary p-4 font-bold">
            Create Project
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProjectModal