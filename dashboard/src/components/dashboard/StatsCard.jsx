const StatsCard = ({
  title,
  value,
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-secondary p-6">
      <p className="mb-3 text-gray-400">
        {title}
      </p>

      <h2 className="text-4xl font-black">
        {value}
      </h2>
    </div>
  )
}

export default StatsCard