import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import DashboardLayout from "../layouts/DashboardLayout"

import DashboardHome from "../pages/DashboardHome"
import Projects from "../pages/Projects"
import Bookings from "../pages/Bookings"
import Analytics from "../pages/Analytics"
import Settings from "../pages/Settings"

const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardHome />} />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/bookings"
            element={<Bookings />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default DashboardRoutes