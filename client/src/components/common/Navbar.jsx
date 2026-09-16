import { useEffect, useState } from "react";

import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";

import { navLinks } from "../../constants/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  // Add Founder without changing navigation.js
  const updatedNavLinks = [
    ...navLinks.filter((item) => item.path !== "/founder"),
    {
      name: "Founder",
      path: "/founder",
    },
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-dark/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="gradient-text text-3xl font-black"
        >
          SamNex
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {updatedNavLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-300 hover:text-accent ${
                  isActive
                    ? "text-accent"
                    : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Start Project */}
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-primary/90"
          >
            Start Project
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-3xl text-white transition hover:text-accent md:hidden"
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-secondary/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-6 py-6">

            {updatedNavLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition duration-300 hover:text-accent ${
                    isActive
                      ? "text-accent"
                      : "text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Start Project */}
            <button
              type="button"
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
              className="rounded-xl bg-primary px-5 py-3 font-semibold text-white transition duration-300 hover:bg-primary/90"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
