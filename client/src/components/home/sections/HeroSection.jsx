import { motion } from "framer-motion"

import {
  useNavigate,
} from "react-router-dom"

import PrimaryButton from "../../ui/PrimaryButton"

const HeroSection = () => {
  const navigate =
    useNavigate()

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
            AI-Assisted Software Agency
          </p>

          <h1 className="mb-8 text-5xl font-black leading-tight md:text-7xl">
            Building Scalable Digital Products For Modern Businesses
          </h1>

          <p className="mb-10 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            SamNex designs and develops premium web applications,
            SaaS platforms,
            dashboards,
            automation systems,
            and AI-powered business solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <div
              onClick={() =>
                navigate(
                  "/contact"
                )
              }
            >
              <PrimaryButton>
                Start A Project
              </PrimaryButton>
            </div>

            <button
              onClick={() =>
                navigate(
                  "/projects"
                )
              }
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5"
            >
              View Projects
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-[-120px] top-[-100px] h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl"></div>
    </section>
  )
}

export default HeroSection