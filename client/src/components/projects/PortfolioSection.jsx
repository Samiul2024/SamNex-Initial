import { projects } from "../../data/projects"

import ProjectCard from "./ProjectCard"

const PortfolioSection =
  () => {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-5 py-2 text-primary">
              Portfolio
            </span>

            <h2 className="mb-6 text-5xl font-black">
              Featured Projects
            </h2>

            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Real projects designed and developed with modern scalable technologies.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map(
              (
                project
              ) => (
                <ProjectCard
                  key={project.id}
                  project={
                    project
                  }
                />
              )
            )}
          </div>
        </div>
      </section>
    )
  }

export default PortfolioSection