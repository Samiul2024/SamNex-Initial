import { Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import ProjectDetails from "../pages/projects/ProjectDetails"


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route
          path="projects"
          element={<Projects />}
        />

        <Route
          path="projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="services"
          element={<Services />}
        />

        <Route
          path="contact"
          element={<Contact />}
        />
      </Route>
    </Routes>
  )
}

export default MainRoutes