import SEO from "../components/seo/SEO"

import PortfolioSection from "../components/projects/PortfolioSection"

const Projects = () => {
  return (
    <>
      <SEO
        title="Projects"
        description="Explore scalable MERN stack and AI-assisted projects developed by SamNex."
      />

      <PortfolioSection />
    </>
  )
}

export default Projects