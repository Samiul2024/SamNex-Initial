import HeroSection from "../components/home/sections/HeroSection"
import StatsSection from "../components/home/sections/StatsSection"
import ServicesPreview from "../components/home/sections/ServicesPreview"
import ProjectsPreview from "../components/home/sections/ProjectsPreview"
import CTASection from "../components/home/sections/CTASection"

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}

export default Home