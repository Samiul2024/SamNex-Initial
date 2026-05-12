import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import Home from "../pages/Home"
import Services from "../pages/Services"
import Projects from "../pages/Projects"
import Booking from "../pages/Booking"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes