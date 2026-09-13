import bannerStack from "../assets/logo-text.png"


import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center">
  <img
    src={bannerStack}
    alt="Dev Stack"
    className="h-10 w-auto object-contain"
  />
</a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#" className="font-medium text-slate-700 hover:text-purple-600">
            Home
          </a>

          <a
            href="#technologies"
            className="font-medium text-slate-700 hover:text-purple-600"
          >
            Technologies
          </a>

          <a href="#projects" className="font-medium text-slate-700 hover:text-purple-600">
            Projects
          </a>

          <a href="#about" className="font-medium text-slate-700 hover:text-purple-600">
            About
          </a>

          <a href="#contact" className="font-medium text-slate-700 hover:text-purple-600">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="px-2 py-2 text-sm font-medium text-slate-700 sm:px-3 sm:text-base">
            Sign In
          </button>

          <button className="rounded-full gradient-bg px-4 py-2 text-sm font-semibold text-white sm:px-5">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-3">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-purple-50"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-purple-50"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-purple-50"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-purple-50"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-purple-50"
            >
              Contact
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;