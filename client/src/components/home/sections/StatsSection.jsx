const stats = [
  {
    number: "3+",
    label: "Projects Built",
  },

  {
    number: "100%",
    label: "Responsive Design",
  },

  {
    number: "AI",
    label: "Assisted Workflow",
  },

  {
    number: "24/7",
    label: "Support System",
  },
]

const StatsSection = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >
              <h3 className="mb-2 text-4xl font-black text-primary">
                {item.number}
              </h3>

              <p className="text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection