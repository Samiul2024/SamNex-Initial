import { useParams, Link } from "react-router-dom";

import { projects } from "../../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  // Find project by slug
  const project = projects.find(
    (item) => item.slug === slug
  );

  // Project not found
  if (!project) {
    return (
      <section className="min-h-screen bg-dark">
        <div className="container flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-5xl font-black text-white">
            Project Not Found
          </h1>

          <p className="mb-8 max-w-lg text-gray-400">
            The project you are looking for does not exist or
            may have been removed.
          </p>

          <Link
            to="/projects"
            className="rounded-2xl bg-primary px-8 py-4 font-bold text-white transition hover:scale-[1.03]"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  // Safely handle missing technologies
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  return (
    <section className="section-padding">
      <div className="container max-w-5xl">

        {/* Project Image */}
        <div className="mb-10 overflow-hidden rounded-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-[300px] w-full object-cover transition duration-500 hover:scale-[1.02] md:h-[500px]"
          />
        </div>

        {/* Category */}
        <span className="mb-5 inline-block rounded-full bg-primary/20 px-5 py-2 text-sm font-semibold text-primary">
          {project.category}
        </span>

        {/* Title */}
        <h1 className="mb-6 text-4xl font-black text-white md:text-6xl">
          {project.title}
        </h1>

        {/* Description */}
        <p className="mb-10 text-lg leading-relaxed text-gray-400 md:text-xl">
          {project.description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold text-white">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-200 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Actions */}
        <div className="flex flex-wrap gap-4">

          {/* Live Project */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-primary/90"
            >
              Visit Live Project
            </a>
          )}

          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-8 py-4 text-lg font-bold text-white transition duration-300 hover:border-primary hover:text-primary"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
