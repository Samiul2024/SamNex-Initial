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

import Login from "../pages/auth/Login"

import ProtectedRoute from "../components/common/ProtectedRoute"

const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={<DashboardHome />}
          />

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