import { NavLink } from "react-router-dom"

import { sidebarLinks } from "../../constants/sidebarLinks"

const Sidebar = () => {
  return (
    <aside className="hidden min-h-screen w-[260px] border-r border-white/10 bg-secondary p-6 lg:block">
      <div className="mb-10">
        <h1 className="text-3xl font-black gradient-text">
          SamNex
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Admin Dashboard
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {sidebarLinks.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-white/5"
                }`
              }
            >
              <Icon size={22} />

              <span>{item.name}</span>
            </NavLink>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar