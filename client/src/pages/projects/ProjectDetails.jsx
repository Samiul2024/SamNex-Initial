import {
  useParams,
} from "react-router-dom"

import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa"

import SEO from "../../components/seo/SEO"

import { projectsData } from "../../data/projectsData"

const ProjectDetails = () => {
  const { slug } =
    useParams()

  const project =
    projectsData.find(
      (p) =>
        p.slug === slug
    )

  if (!project) {
    return (
      <div className="container py-32">
        Project not found
      </div>
    )
  }

  return (
    <>
      <SEO
        title={project.title}
        description={
          project.description
        }
      />

      <section className="py-32">
        <div className="container">
          <img
            src={project.image}
            alt={project.title}
            className="mb-10 h-[500px] w-full rounded-3xl object-cover"
          />

          <div className="mb-6">
            <span className="rounded-full bg-primary/20 px-5 py-2 text-primary">
              {
                project.category
              }
            </span>
          </div>

          <h1 className="mb-8 text-6xl font-black">
            {project.title}
          </h1>

          <p className="mb-10 max-w-4xl text-xl leading-relaxed text-gray-400">
            {
              project.longDescription
            }
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            {project.stack.map(
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

          <div className="flex gap-4">
            <a
              href={
                project.liveLink
              }
              target="_blank"
              className="flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold"
            >
              Live Demo

              <FaExternalLinkAlt />
            </a>

            <a
              href={
                project.githubLink
              }
              target="_blank"
              className="flex items-center gap-3 rounded-xl border border-white/10 px-8 py-4"
            >
              GitHub

              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetails