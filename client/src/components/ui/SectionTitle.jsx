const SectionTitle = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
        {badge}
      </p>

      <h2 className="mb-4 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="text-lg text-gray-400">
        {description}
      </p>
    </div>
  )
}

export default SectionTitle