const faqs = [
  {
    question:
      "What technologies do you use?",

    answer:
      "SamNex specializes in MERN stack development, scalable SaaS systems, AI integrations, automation, and real-time applications.",
  },

  {
    question:
      "Can SamNex build custom SaaS platforms?",

    answer:
      "Yes. SamNex builds scalable modern SaaS applications tailored to startup and business requirements.",
  },

  {
    question:
      "Do you provide deployment support?",

    answer:
      "Yes. Deployment, optimization, and production support are included in project workflows.",
  },

  {
    question:
      "Can AI features be integrated?",

    answer:
      "Absolutely. SamNex specializes in AI-assisted workflows, automation systems, and intelligent application integrations.",
  },
]

const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-5 py-2 text-primary">
            FAQ
          </span>

          <h2 className="mb-6 text-5xl font-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map(
            (
              faq,
              index
            ) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-secondary p-8"
              >
                <h3 className="mb-4 text-2xl font-black">
                  {
                    faq.question
                  }
                </h3>

                <p className="text-gray-400">
                  {
                    faq.answer
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

export default FAQSection