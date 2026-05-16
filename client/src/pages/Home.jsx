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
        title="AI-Assisted MERN Stack Agency"
        description="SamNex builds scalable MERN stack platforms, SaaS systems, AI integrations, dashboards, automation tools, and modern digital experiences."
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