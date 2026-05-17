const services = [
  "MERN Stack Development",
  "SaaS Platforms",
  "AI Integrations",
  "Automation Systems",
  "Dashboard Systems",
  "Business Websites",
  "Real-Time Applications",
  "API Development",
]

const Services = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-5 py-2 text-primary">
            Services
          </span>

          <h1 className="mb-6 text-6xl font-black">
            What SamNex Builds
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map(
            (
              service,
              index
            ) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-secondary p-10 text-center"
              >
                <h3 className="text-2xl font-black">
                  {service}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Services