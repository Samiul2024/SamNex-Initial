import {
  useEffect,
  useState,
} from "react"

import SectionTitle from "../../ui/SectionTitle"

import { getProjects } from "../../../services/projectService"

const ProjectsPreview = () => {
  const [projects, setProjects] =
    useState([])

  useEffect(() => {
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

    fetchProjects()
  }, [])

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Projects"
          title="Selected Work & Case Studies"
          description="Real projects and scalable systems built with modern technologies."
        />

        <div className="grid gap-8 md:grid-cols-3">
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
                <p className="mb-2 text-sm text-accent">
                  {project.category}
                </p>

                <h3 className="mb-4 text-2xl font-bold">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map(
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview