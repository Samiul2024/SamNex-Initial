import { motion } from "framer-motion"

import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa"

import {
  Link,
} from "react-router-dom"

const ProjectCard = ({
  project,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-secondary"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">
            {project.category}
          </span>
        </div>

        <h3 className="mb-4 text-3xl font-black">
          {project.title}
        </h3>

        <p className="mb-6 text-gray-400">
          {
            project.description
          }
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map(
            (
              tech,
              index
            ) => (
              <span
                key={index}
                className="rounded-full border border-white/10 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div className="flex gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="rounded-xl bg-primary px-5 py-3 font-bold"
          >
            View Details
          </Link>

          <a
            href={
              project.liveLink
            }
            target="_blank"
            className="rounded-xl border border-white/10 px-5 py-3"
          >
            <FaExternalLinkAlt />
          </a>

          <a
            href={
              project.githubLink
            }
            target="_blank"
            className="rounded-xl border border-white/10 px-5 py-3"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard