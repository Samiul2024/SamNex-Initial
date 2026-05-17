import { useEffect, useState } from "react"

import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom"

import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi"

import { navLinks } from "../../constants/navigation"

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

  const navigate =
    useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      )
    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-dark/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          to="/"
          className="gradient-text text-3xl font-black"
        >
          SamNex
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(
            (
              item
            ) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({
                  isActive,
                }) =>
                  `text-sm font-medium transition hover:text-accent ${
                    isActive
                      ? "text-accent"
                      : "text-white"
                  }`
                }
              >
                {
                  item.name
                }
              </NavLink>
            )
          )}

          <button
            onClick={() =>
              navigate(
                "/contact"
              )
            }
            className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold transition hover:scale-[1.03]"
          >
            Start Project
          </button>
        </nav>

        <button
          onClick={() =>
            setIsOpen(
              !isOpen
            )
          }
          className="text-3xl md:hidden"
        >
          {isOpen ? (
            <HiX />
          ) : (
            <HiMenuAlt3 />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-secondary md:hidden">
          <div className="container flex flex-col gap-6 py-6">
            {navLinks.map(
              (
                item
              ) => (
                <NavLink
                  key={
                    item.path
                  }
                  to={
                    item.path
                  }
                  onClick={() =>
                    setIsOpen(
                      false
                    )
                  }
                  className={({
                    isActive,
                  }) =>
                    `text-lg transition ${
                      isActive
                        ? "text-accent"
                        : "text-white"
                    }`
                  }
                >
                  {
                    item.name
                  }
                </NavLink>
              )
            )}

            <button
              onClick={() => {
                navigate(
                  "/contact"
                )

                setIsOpen(
                  false
                )
              }}
              className="rounded-xl bg-primary px-5 py-3 font-semibold"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar