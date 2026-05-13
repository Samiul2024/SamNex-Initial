import { Outlet } from "react-router-dom"

import Sidebar from "../components/common/Sidebar"
import Topbar from "../components/common/Topbar"

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout