import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineCog,
} from "react-icons/hi"

export const sidebarLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: HiOutlineHome,
  },

  {
    name: "Projects",
    path: "/projects",
    icon: HiOutlineFolder,
  },

  {
    name: "Bookings",
    path: "/bookings",
    icon: HiOutlineCalendar,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: HiOutlineChartBar,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: HiOutlineCog,
  },
]