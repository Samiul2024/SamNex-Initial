import {
  motion,
} from "framer-motion"

import ProjectCard from "../components/projects/ProjectCard"

import { projects } from "../data/projects"

const Projects = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Work
          </p>

          <h1 className="mb-6 text-5xl font-black">
            Selected Projects
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            A collection of modern business websites,
            scalable web applications,
            and premium frontend experiences built for real-world brands and businesses.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(
            (
              project,
              index
            ) => (
              <motion.div
                key={
                  project.id
                }
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index *
                    0.1,
                }}
              >
                <ProjectCard
                  project={
                    project
                  }
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects