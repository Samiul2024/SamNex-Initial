const Home = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-4xl">
          <p className="mb-4 text-accent">
            AI-Assisted Software Agency
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Building Modern Digital Products For Future Businesses
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-gray-400">
            SamNex builds scalable web applications,
            SaaS platforms, dashboards, and AI-assisted systems
            for modern businesses.
          </p>

          <div className="flex gap-4">
            <button className="rounded-xl bg-primary px-6 py-3 font-semibold">
              Start Project
            </button>

            <button className="rounded-xl border border-white/20 px-6 py-3">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home