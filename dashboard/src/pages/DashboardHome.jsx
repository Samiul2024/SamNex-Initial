import {
  useEffect,
  useState,
} from "react"

import StatsCard from "../components/dashboard/StatsCard"

import BookingsChart from "../components/dashboard/BookingsChart"

import ProjectsChart from "../components/dashboard/ProjectsChart"

import { getDashboardStats } from "../services/dashboardService"

const DashboardHome = () => {
  const [stats, setStats] =
    useState(null)

  const admin = JSON.parse(
    localStorage.getItem("admin")
  )

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const data =
            await getDashboardStats(
              admin.token
            )

          setStats(data.stats)
        } catch (error) {
          console.log(error)
        }
      }

    fetchStats()
  }, [])

  if (!stats) {
    return (
      <div>
        Loading dashboard...
      </div>
    )
  }

  const bookingData = [
    {
      name: "Bookings",
      value:
        stats.totalBookings,
    },
  ]

  const projectData = [
    {
      name: "Planning",
      value:
        stats.planningProjects,
    },

    {
      name: "Active",
      value:
        stats.activeProjects,
    },

    {
      name: "Completed",
      value:
        stats.completedProjects,
    },
  ]

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-black">
          Dashboard Overview
        </h1>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Bookings"
          value={
            stats.totalBookings
          }
        />

        <StatsCard
          title="Total Projects"
          value={
            stats.totalProjects
          }
        />

        <StatsCard
          title="Completed Projects"
          value={
            stats.completedProjects
          }
        />

        <StatsCard
          title="Active Projects"
          value={
            stats.activeProjects
          }
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <BookingsChart
          data={bookingData}
        />

        <ProjectsChart
          data={projectData}
        />
      </div>
    </div>
  )
}

export default DashboardHome