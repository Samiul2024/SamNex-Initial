import SectionTitle from "../ui/SectionTitle"

import ProjectCard from "./ProjectCard"

import { projectsData } from "../../data/projectsData"

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="section-padding"
    >
      <div className="container">
        <SectionTitle
          badge="Portfolio"
          title="Featured Projects"
          description="Real-world modern scalable applications built with premium frontend and MERN stack architecture."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map(
            (project) => (
              <ProjectCard
                key={
                  project.slug
                }
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