import SectionTitle from "../../ui/SectionTitle"

const projects = [
  {
    title: "Enterprise Dashboard",
    category: "Analytics Platform",
  },

  {
    title: "AI Automation SaaS",
    category: "Automation System",
  },

  {
    title: "Modern E-Commerce",
    category: "Full Stack MERN",
  },
]

const ProjectsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Projects"
          title="Selected Work & Case Studies"
          description="A glimpse of scalable systems and premium digital products built with modern technologies."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-secondary"
            >
              <div className="h-56 bg-gradient-to-br from-primary/40 to-accent/30"></div>

              <div className="p-6">
                <p className="mb-2 text-sm text-accent">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview