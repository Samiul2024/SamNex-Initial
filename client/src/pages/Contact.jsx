const Contact = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-5 py-2 text-primary">
            Contact
          </span>

          <h1 className="mb-6 text-6xl font-black">
            Start Your Project
          </h1>

          <p className="text-xl text-gray-400">
            Discuss your startup, SaaS, AI automation, or business platform with SamNex.
          </p>
        </div>

        <form className="space-y-8 rounded-3xl border border-white/10 bg-secondary p-10">
          <div>
            <label className="mb-3 block text-lg">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-dark p-5 outline-none"
            />
          </div>

          <div>
            <label className="mb-3 block text-lg">
              Email
            </label>

            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-2xl border border-white/10 bg-dark p-5 outline-none"
            />
          </div>

          <div>
            <label className="mb-3 block text-lg">
              Project Details
            </label>

            <textarea
              rows="6"
              placeholder="Tell about your project..."
              className="w-full rounded-2xl border border-white/10 bg-dark p-5 outline-none"
            />
          </div>

          <button className="w-full rounded-2xl bg-primary py-5 text-lg font-bold">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact