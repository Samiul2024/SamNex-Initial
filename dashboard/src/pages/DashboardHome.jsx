const cards = [
  {
    title: "Total Projects",
    value: "12",
  },

  {
    title: "Active Clients",
    value: "5",
  },

  {
    title: "Bookings",
    value: "18",
  },

  {
    title: "Revenue",
    value: "$4.2K",
  },
]

const DashboardHome = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-black">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-gray-400">
          Here's your agency overview.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-secondary p-6"
          >
            <p className="text-gray-400">
              {card.title}
            </p>

            <h2 className="mt-4 text-4xl font-black text-primary">
              {card.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardHome