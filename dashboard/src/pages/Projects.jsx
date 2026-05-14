import {
  useEffect,
  useState,
} from "react"

import toast from "react-hot-toast"

import CreateProjectModal from "../components/projects/CreateProjectModal"

import {
  getProjects,
  updateProjectStatus,
} from "../services/projectService"

const Projects = () => {
  const [projects, setProjects] =
    useState([])

  const [openModal, setOpenModal] =
    useState(false)

  const admin = JSON.parse(
    localStorage.getItem("admin")
  )

  const fetchProjects =
    async () => {
      try {
        const data =
          await getProjects()

        setProjects(data.projects)
      } catch (error) {
        console.log(error)
      }
    }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleStatusChange =
    async (id, status) => {
      try {
        await updateProjectStatus(
          id,
          status,
          admin.token
        )

        toast.success(
          "Project updated"
        )

        fetchProjects()
      } catch (error) {
        toast.error(
          "Update failed"
        )
      }
    }

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-black">
          Projects
        </h1>

        <button
          onClick={() =>
            setOpenModal(true)
          }
          className="rounded-xl bg-primary px-5 py-3 font-bold"
        >
          Create Project
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project._id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-secondary"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-56 object-cover"
            />

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-black">
                  {project.title}
                </h2>

                <span className="rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">
                  {project.status}
                </span>
              </div>

              <p className="mb-5 text-gray-400">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map(
                  (
                    tech,
                    index
                  ) => (
                    <span
                      key={index}
                      className="rounded-full bg-dark px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <select
                value={project.status}
                onChange={(e) =>
                  handleStatusChange(
                    project._id,
                    e.target.value
                  )
                }
                className="rounded-xl border border-white/10 bg-dark p-3 outline-none"
              >
                <option value="planning">
                  Planning
                </option>

                <option value="in_progress">
                  In Progress
                </option>

                <option value="completed">
                  Completed
                </option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {openModal && (
        <CreateProjectModal
          closeModal={() =>
            setOpenModal(false)
          }
          refreshProjects={
            fetchProjects
          }
        />
      )}
    </div>
  )
}

export default Projects