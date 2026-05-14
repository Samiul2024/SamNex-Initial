import { useState } from "react"

import toast from "react-hot-toast"

import {
  createProject,
} from "../../services/projectService"

import {
  uploadImage,
} from "../../services/uploadService"

const CreateProjectModal = ({
  closeModal,
  refreshProjects,
}) => {
  const admin = JSON.parse(
    localStorage.getItem("admin")
  )

  const [uploading, setUploading] =
    useState(false)

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

  const handleImageUpload =
    async (e) => {
      const file =
        e.target.files[0]

      if (!file) return

      try {
        setUploading(true)

        const data =
          await uploadImage(
            file,
            admin.token
          )

        setFormData({
          ...formData,
          thumbnail:
            data.imageUrl,
        })

        toast.success(
          "Image uploaded"
        )
      } catch (error) {
        toast.error(
          "Upload failed"
        )
      } finally {
        setUploading(false)
      }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 overflow-y-auto">
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

          <div>
            <label className="mb-2 block font-semibold">
              Upload Thumbnail
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageUpload
              }
              className="w-full rounded-xl border border-white/10 bg-dark p-4"
            />

            {uploading && (
              <p className="mt-2 text-sm text-accent">
                Uploading...
              </p>
            )}

            {formData.thumbnail && (
              <img
                src={
                  formData.thumbnail
                }
                alt="preview"
                className="mt-4 h-48 w-full rounded-xl object-cover"
              />
            )}
          </div>

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