function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow">
      
      <h1 className="text-2xl font-bold">
        Dev <span className="brand-gradient">Stack</span>
      </h1>

      <div className="hidden gap-6 md:flex">
        <a href="#" className="text-slate-700">
          Home
        </a>

        <a href="#technologies" className="text-slate-700">
          Technologies
        </a>

        <a href="#projects" className="text-slate-700">
          Projects
        </a>

        <a href="#about" className="text-slate-700">
          About
        </a>

        <a href="#contact" className="text-slate-700">
          Contact
        </a>
      </div>

      <div className="flex gap-2">
        <button className="px-3 py-2">
          Sign In
        </button>

        <button className="rounded-full gradient-bg px-5 py-2 text-white">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default Navbar;