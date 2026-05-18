import SEO from "../components/seo/SEO"

import HeroSection from "../components/home/sections/HeroSection"

import StatsSection from "../components/home/sections/StatsSection"

import ServicesPreview from "../components/home/sections/ServicesPreview"

import PortfolioSection from "../components/projects/PortfolioSection"

import ProcessSection from "../components/home/sections/ProcessSection"

import TestimonialsSection from "../components/home/sections/TestimonialsSection"

import FAQSection from "../components/home/sections/FAQSection"

import CTASection from "../components/home/sections/CTASection"

const Home = () => {
  return (
    <>
      <SEO
        title="SamNex | AI-Assisted MERN Stack Agency"
        description="SamNex is a modern AI-assisted software agency building scalable MERN stack applications, SaaS platforms, dashboards and business solutions."
        keywords="SamNex, MERN Stack Developer, React Developer, Node.js Agency, Bangladesh Web Developer, SaaS Development, AI Agency"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        url="https://samnex.vercel.app"
      />

      <HeroSection />

      <StatsSection />

      <ServicesPreview />

      <PortfolioSection />

      <ProcessSection />

      <TestimonialsSection />

      <FAQSection />

      <CTASection />
    </>
  )
}

export default Home