import { useParams } from "react-router-dom"

import { projects } from "../data/projects"

const ProjectDetails =
  () => {
    const { slug } =
      useParams()

    const project =
      projects.find(
        (
          item
        ) =>
          item.slug ===
          slug
      )

    if (!project) {
      return (
        <div className="container py-40 text-center">
          <h1 className="text-5xl font-black">
            Project Not Found
          </h1>
        </div>
      )
    }

    return (
      <section className="section-padding">
        <div className="container max-w-5xl">
          <img
            src={project.image}
            alt={project.title}
            className="mb-10 h-[500px] w-full rounded-3xl object-cover"
          />

          <span className="mb-5 inline-block rounded-full bg-primary/20 px-5 py-2 text-primary">
            {
              project.category
            }
          </span>

          <h1 className="mb-6 text-6xl font-black">
            {project.title}
          </h1>

          <p className="mb-10 text-xl leading-relaxed text-gray-400">
            {
              project.description
            }
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            {project.technologies.map(
              (
                tech,
                index
              ) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 px-5 py-2"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-bold"
          >
            Visit Live Project
          </a>
        </div>
      </section>
    )
  }

export default ProjectDetails