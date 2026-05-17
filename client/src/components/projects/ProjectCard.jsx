import { Link } from "react-router-dom"

const ProjectCard = ({
  project,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-secondary transition duration-300 hover:-translate-y-2">
      <img
        src={project.image}
        alt={project.title}
        className="h-64 w-full object-cover"
      />

      <div className="p-8">
        <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">
          {project.category}
        </span>

        <h3 className="mb-4 text-3xl font-black">
          {project.title}
        </h3>

        <p className="mb-6 text-gray-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-3">
          {project.technologies.map(
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

        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-primary px-5 py-3 font-semibold"
          >
            Live Demo
          </a>

          <Link
            to={`/projects/${project.slug}`}
            className="rounded-xl border border-white/10 px-5 py-3 font-semibold"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard