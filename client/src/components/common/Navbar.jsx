import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/80 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-4">
        <Link
          to="/"
          className="text-2xl font-bold gradient-text"
        >
          SamNex
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold hover:opacity-90">
          Hire Us
        </button>
      </div>
    </header>
  )
}

export default Navbar