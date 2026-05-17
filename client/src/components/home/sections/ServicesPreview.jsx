import SectionTitle from "../../ui/SectionTitle"

const services = [
  "MERN Web Applications",
  "SaaS Platforms",
  "Admin Dashboards",
  "AI Integrations",
  "REST APIs",
  "Automation Systems",
]

const ServicesPreview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Services"
          title="High Performance Website Solutions"
          description="We build scalable digital systems that help businesses automate, grow, and dominate online."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-secondary p-8 transition hover:-translate-y-1 hover:border-primary"
            >
              <h3 className="text-2xl font-bold">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview