import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Booking from "../pages/Booking";
import Founder from "../pages/founder";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Main Website Layout */}
      <Route path="/" element={<MainLayout />}>
        
        {/* Home */}
        <Route
          index
          element={<Home />}
        />

        {/* Projects */}
        <Route
          path="projects"
          element={<Projects />}
        />

        {/* Project Details */}
        <Route
          path="projects/:slug"
          element={<ProjectDetails />}
        />

        {/* Services */}
        <Route
          path="services"
          element={<Services />}
        />

        {/* Booking */}
        <Route
          path="booking"
          element={<Booking />}
        />

        {/* Founder */}
        <Route
          path="founder"
          element={<Founder />}
        />

        {/* Contact */}
        <Route
          path="contact"
          element={<Contact />}
        />

      </Route>
    </Routes>
  );
};

export default MainRoutes;
