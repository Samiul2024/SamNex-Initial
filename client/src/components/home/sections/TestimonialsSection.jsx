const testimonials = [
  {
    name: "Sadik Rahman",

    text: "SamNex delivered a premium modern platform that exceeded expectations.",

    company:
      "Aam Bari",
  },

  {
    name: "Founder",

    text: "Professional workflow, modern UI, and excellent communication throughout development.",

    company:
      "Sam Cafe",
  },

  {
    name: "MD. Samiulla Hossen",

    text: "The platform performance and scalability were impressive from day one.",

    company:
      "Mollick Family",
  },
]

const TestimonialsSection =
  () => {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-5 py-2 text-accent">
              Testimonials
            </span>

            <h2 className="mb-6 text-5xl font-black">
              Client Experiences
            </h2>

            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Businesses trust SamNex to build scalable modern digital experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map(
              (
                item,
                index
              ) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-secondary p-8"
                >
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">
                    "
                    {
                      item.text
                    }
                    "
                  </p>

                  <div>
                    <h3 className="text-2xl font-black">
                      {item.name}
                    </h3>

                    <p className="text-gray-400">
                      {
                        item.company
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    )
  }

export default TestimonialsSection