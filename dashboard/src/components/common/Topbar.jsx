const Topbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 px-6">
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-primary"></div>
      </div>
    </header>
  )
}

export default Topbar