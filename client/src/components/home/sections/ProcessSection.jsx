const processSteps = [
  {
    title: "Discovery",
    description:
      "We analyze your business goals, requirements, and growth opportunities.",
  },

  {
    title: "Planning",
    description:
      "We architect scalable modern solutions tailored to your business.",
  },

  {
    title: "Development",
    description:
      "We build high-performance scalable applications using MERN technologies.",
  },

  {
    title: "Launch",
    description:
      "We deploy, optimize, and support your platform for long-term growth.",
  },
]

const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-5 py-2 text-primary">
            Process
          </span>

          <h2 className="mb-6 text-5xl font-black">
            How SamNex Works
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            Structured modern workflow optimized for startups, businesses, and scalable digital platforms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map(
            (
              step,
              index
            ) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-secondary p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-black">
                  {index + 1}
                </div>

                <h3 className="mb-4 text-3xl font-black">
                  {step.title}
                </h3>

                <p className="text-gray-400">
                  {
                    step.description
                  }
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection