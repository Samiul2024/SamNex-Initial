import PrimaryButton from "../../ui/PrimaryButton"

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-primary/20 to-accent/10 p-12 text-center">
          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Ready To Build Your Next Big Product?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Launch scalable modern systems with SamNex —
            your AI-assisted software development partner.
          </p>

          <PrimaryButton>
            Book A Consultation
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default CTASection